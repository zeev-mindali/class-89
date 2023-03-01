import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>Chabad Donation</h1>
      <div className="MenuItems">
        <NavLink to="/"> Home</NavLink> |&nbsp;
        <NavLink to="/add">Get Donation</NavLink> |&nbsp;
        <NavLink to="/list">Donation List</NavLink> |&nbsp;
        <NavLink to="/about">About us</NavLink>
      </div>
    </div>
  );
}

export default Header;
