
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchGetAccount } from "../../store/slices/accountSlice";
import Ammo from "../../components/Ammo";
import { DataStatus } from "../../types/redux";
import History from "../../components/History";
import { ERole } from "../../types/DTOs/response/fromAccount";
import { useNavigate } from "react-router-dom";

const Attack = () => {
  const role = useAppSelector(s => s.account.account?.organization.role)
  const loadingAccStatus = useAppSelector(s => s.account.status)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(()=> {
    if (role != ERole.ATTAK) navigate('/error')
dispatch(fetchGetAccount())
  }, [])

  return (
    <div>
        <h1>Attack</h1>
        <Ammo/>
        {loadingAccStatus === DataStatus.SUCCESS && <History/>}
        
    </div>
  )
}

export default Attack