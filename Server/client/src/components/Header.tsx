import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <NavLink to={'/account'} >Home</NavLink>
        <NavLink to={'/attack'} >Attack</NavLink>
        <NavLink to={'/defend'} >Defend</NavLink>
        <NavLink to={'/store'} >Store</NavLink>
        <NavLink to={'/account/login'} >Login</NavLink>
        <NavLink to={'/account/register'} >Register</NavLink>
    </div>
  )
}

export default Header