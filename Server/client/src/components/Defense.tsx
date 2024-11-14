import { useEffect } from "react";
import { fetchGetAccount } from "../store/slices/accountSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Ammo from "./Ammo";
import { DataStatus } from "../types/redux";
import History from "./History";

const Defense = () => {
  const loadingAccStatus = useAppSelector(s => s.account.status)
  const dispatch = useAppDispatch();

  useEffect(()=> {
dispatch(fetchGetAccount())
  }, [])
  return (
    <div>
        <h1>Defense</h1><Ammo/>
        {loadingAccStatus === DataStatus.SUCCESS && <History/>}
    </div>
  )
}

export default Defense