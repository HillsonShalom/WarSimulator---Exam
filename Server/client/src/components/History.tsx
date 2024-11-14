import "./style/History.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeLaunch, fetchTable } from "../store/slices/tableSlice";
import { DataStatus } from "../types/redux";
import { fetchLaunch } from "../utils/attackService";
import { ERole } from "../types/DTOs/response/fromAccount";
import { DispatchStatus } from "../types/DTOs/response/fromHistory";
import { fetchIntercept } from "../utils/defendService";

const History = () => {
  const interceptor = useAppSelector(s => s.defend)
  const loadingStatus = useAppSelector((s) => s.table.status);
  const table = useAppSelector((s) => s.table.data);
  const role = useAppSelector((s) => s.account.account?.organization.role);
  const accountLoaded = useAppSelector((s) => s.account.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (accountLoaded === DataStatus.SUCCESS) {
      dispatch(fetchTable(role!));
    } else {
      alert("An Error occurred in the account data, please try again!");
    }
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rocket</th>
            <th>From</th>
            <th>To</th>
            <th>Time to Hit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loadingStatus === DataStatus.SUCCESS &&
            table.map((r) => {
              return (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.fromOrg}</td>
                  <td>{r.toRegion}</td>
                  <td>{r.timeToHit}</td>
                  <td className="td-btn" onClick={async () => {
                    if (role === ERole.ATTAK) {
                      if (r.status !== DispatchStatus.LOADED) {return;}
                      const [s, e] = await fetchLaunch(r.id);
                    if (!s) {alert(e); return;}
                    dispatch(changeLaunch(r.id))
                    } if (role === ERole.DEFENSE) {
                      if (r.status !== DispatchStatus.LAUNCHED) {return;}
                      if (!interceptor) {alert("choose an interceptor first!"); return;}
                      const [s, e] = await fetchIntercept({threatId: r.id, missile: interceptor})
                      if (!s) {alert(e); return;}
                    }
                  }}>{r.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
