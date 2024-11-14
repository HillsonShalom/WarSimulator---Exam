import { NavLink } from "react-router-dom"

const AppError = () => {
  return (
    <div>
        <h1>You are not allowed to get here!</h1>
        <NavLink to={'/account'}>Home</NavLink>
    </div>
  )
}

export default AppError