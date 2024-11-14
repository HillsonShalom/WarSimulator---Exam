import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store"
import { fetchGetAccount } from "../store/slices/accountSlice";
import Ammo from "./Ammo";

const Attack = () => {
    const account = useAppSelector(s => s.account.account);
    const dispatch = useAppDispatch();

    useEffect(()=> {
dispatch(fetchGetAccount())
    }, [])
  return (
    <div>
        <h1>Attack</h1>
        <Ammo/>
        <p>{JSON.stringify(account)}</p>
    </div>
  )
}

export default Attack