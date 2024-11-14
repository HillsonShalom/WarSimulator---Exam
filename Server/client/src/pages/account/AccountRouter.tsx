import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Account from "./Account"

const AccountRouter = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Account/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AccountRouter