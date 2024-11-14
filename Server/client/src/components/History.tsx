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
        <tr>
          <th>Rocket</th>
          <th>From</th>
          <th>Time to Hit</th>
          <th>Status</th>
        </tr>
        {
          
        }
        {loadingStatus === DataStatus.SUCCESS && table.map(r => {
          return (<tr>
            <td>{r.name}</td>
            <td>{r.fromOrg}</td>
            <td>{r.timeToHit}</td>
            <td>{r.status}</td>
          </tr>)
        })}
      </table>
    </div>
  );
};

export default History;
