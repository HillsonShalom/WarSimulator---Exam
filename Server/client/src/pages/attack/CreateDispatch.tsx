import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchLoadMissile } from "../../utils/attackService";
import { addAttack } from "../../store/slices/tableSlice";
import { DispatchStatus } from "../../types/DTOs/response/fromHistory";

const CreateDispatch = () => {
  const missiles = useAppSelector((s) =>
    s.account.account?.organization.resources.map((r) => r.id.name)
  );
  const regions = useAppSelector((s) => s.orgsOps.orgs.filter(o => o.region).map((o) => [o.name, o.region]));
  const attackerOrg = useAppSelector(s => s.account.account?.organization.name)
  const dispatch = useAppDispatch();

  const [missile, setMissile] = useState("");
  const [region, setRegion] = useState("");
  return (
    <div>
      <select value={missile} onChange={(e) => setMissile(e.target.value)}>
        {missiles && missiles.map((m) => <option value={m}>{m}</option>)}
      </select>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        {regions && regions.map((r) => <option value={r[1]}>{r[0]}</option>)}
      </select>
      <button
        onClick={async () => {
          if (!missile || !region) { alert(missile + " " + region); return;} 
          const [s, id] = await fetchLoadMissile({ missile, region });
          if (!s) { alert(id); console.log(id); return;}
          dispatch(
            addAttack({
              id,
              name: missile,
              status: DispatchStatus.LOADED,
              launchTime: null,
              toRegion: region,
              timeToHit: "",
              fromOrg: attackerOrg || "",
            })
          );
        }}
      >
        Create
      </button>
    </div>
  );
};

export default CreateDispatch;
