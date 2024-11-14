import './style/Page.css'

import { Navigate, Route, Routes } from "react-router-dom"
import Attack from "../pages/attack/Attack"
import Defense from "../pages/defend/Defense"
import Shopping from "../pages/shopping/Shopping"
import AccountRouter from "../pages/account/AccountRouter"
import AppError from "../pages/AppError"

const Page = () => {
  return (
    <div className="main">
        <Routes>
            <Route path='/' element={<Navigate replace to="/account"/>} />
            <Route path='account/*' element={<AccountRouter/>} />
            <Route path='attack/*' element={<Attack/>} />
            <Route path='defend/*' element={<Defense/>} />
            <Route path='store/*' element={<Shopping/>} />
            <Route path='error/*' element={<AppError/>} />
        </Routes>
    </div>
  )
}

export default Page