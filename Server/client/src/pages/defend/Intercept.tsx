
import { useAppDispatch, useAppSelector } from "../../store/store";
import { chooseMissile } from "../../store/slices/defendSlice";

const Intercept = () => {
  const missiles = useAppSelector((s) =>
    s.account.account?.organization.resources.map((r) => r.id.name)
  );
  const chosen = useAppSelector(s => s.defend)
  const dispatch = useAppDispatch()

  return (
    <div>
      <select value={chosen} onChange={e => dispatch(chooseMissile(e.target.value))}>
        {missiles && missiles.map(m => <option value={m}>{m}</option>)}
      </select>
    </div>
  );
};

export default Intercept;
