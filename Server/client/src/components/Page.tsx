import { Route, Routes } from "react-router-dom"
import Account from "./Account"

const Page = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Account/>} />
            <Route path='/attack' element={<Account/>} />
            <Route path='/' element={<Account/>} />
            <Route path='/' element={<Account/>} />
            <Route path='/' element={<Account/>} />
        </Routes>
    </div>
  )
}

export default Page