import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchTable } from "../store/slices/tableSlice";
import { DataStatus } from "../types/redux";

const History = () => {
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
                  <td>{r.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
