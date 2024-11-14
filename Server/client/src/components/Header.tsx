import { NavLink } from "react-router-dom";
import './style/Styles_Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>War Simulator</h1>
      </div>
      <div className="header-links">
        <NavLink to={"/account"}>Home</NavLink>
        <NavLink to={"/attack"}>Attack</NavLink>
        <NavLink to={"/defend"}>Defend</NavLink>
        <NavLink to={"/store"}>Store</NavLink>
        <NavLink to={"/account/login"}>Login</NavLink>
        <NavLink to={"/account/register"}>Register</NavLink>
      </div>
    </div>
  );
};

export default Header;
