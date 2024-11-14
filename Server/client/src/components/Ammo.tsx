import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/store"
import { fetchGetAccount } from "../store/slices/accountSlice"
import { DataStatus } from "../types/redux"
import CreateDispatch from "./CreateDispatch"
import { ERole } from "../types/DTOs/response/fromAccount"

const Ammo = () => {
    const role = useAppSelector(s => s.account.account?.organization.role)
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
        {(loadingStatus === DataStatus.SUCCESS && role === ERole.ATTAK) && <CreateDispatch/>}
    </div>
  )
}

export default Ammo