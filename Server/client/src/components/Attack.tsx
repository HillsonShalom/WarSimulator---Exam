
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import Ammo from "./Ammo";
import History from "./History";
import { fetchGetAccount } from "../store/slices/accountSlice";
import { DataStatus } from "../types/redux";

const Attack = () => {
  const loadingAccStatus = useAppSelector(s => s.account.status)
  const dispatch = useAppDispatch();

  useEffect(()=> {
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