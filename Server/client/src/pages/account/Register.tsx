import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { fetchOrgsOptions } from "../../store/slices/orgsSlice"
import { fetchRegister } from "../../utils/accountService"

const Register = () => {
    const orgs = useAppSelector(s => s.orgsOps.orgs)
    const dispatch = useAppDispatch()
    const [orgChoice, setOrgChoice] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        dispatch(fetchOrgsOptions())
    }, [])
  return (
    <div>
        <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <select value={orgChoice} onChange={e => setOrgChoice(e.target.value)}>
            {orgs.map(o => <option value={o.name}>{o.name}</option>)}
        </select>
        <button onClick={async () => {
            if (!orgChoice) {
                alert("please choose organization"); return;
            }
            const [s, e] = await fetchRegister({username, password, organization: orgChoice})
            if (!s){
                alert(e); return;
            }
            alert("succeeded")
            // navigation
        }}>Register</button>
    </div>
  )
}

export default Register