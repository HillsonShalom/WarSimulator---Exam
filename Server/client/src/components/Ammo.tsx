import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/store"
import { fetchGetAccount } from "../store/slices/accountSlice"
import { DataStatus } from "../types/redux"

const Ammo = () => {
    const loadingStatus = useAppSelector(s => s.account.status)
    const capabs = useAppSelector(s => s.account.account?.organization.resources)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if (!capabs) {
            dispatch(fetchGetAccount())
        }
    },[])
  return (
    <div className="ammo">
        {loadingStatus === DataStatus.SUCCESS && capabs!.map(r => <p>{r.id.name + ": " + r.amount}</p>)}
    </div>
  )
}

export default Ammo