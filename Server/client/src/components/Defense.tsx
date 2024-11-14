import { useEffect } from "react";
import { fetchGetAccount } from "../store/slices/accountSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Ammo from "./Ammo";

const Defense = () => {
    const account = useAppSelector(s => s.account.account);
    const dispatch = useAppDispatch();

    useEffect(()=> {
dispatch(fetchGetAccount())
    }, [])
  return (
    <div>
        <h1>Defense</h1>
        <Ammo/>
    </div>
  )
}

export default Defense