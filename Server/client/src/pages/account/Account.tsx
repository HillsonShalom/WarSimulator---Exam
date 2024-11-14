import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchGetAccount } from "../../store/slices/accountSlice";
import { DataStatus } from "../../types/redux";
import { ERole } from "../../types/DTOs/response/fromAccount";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const accountStatus = useAppSelector((s) => s.account.status);

  const role = useAppSelector((s) => s.account.account?.organization.role);
  const username = useAppSelector((s) => s.account.account?.username);
  const orgName = useAppSelector((s) => s.account.account?.organization.name);
  const orgRegion = useAppSelector(
    (s) => s.account.account?.organization.region
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) navigate('/account/login');
    dispatch(fetchGetAccount());
  }, []);

  return (
    <div>
      {accountStatus === DataStatus.SUCCESS && (
        <div>
          <h1>{username}</h1>
          <h2>{orgName}</h2>
          <h2>{role}</h2>
          {role === ERole.DEFENSE && <h3>{orgRegion}</h3>}
        </div>
      )}
    </div>
  );
};

export default Account;
