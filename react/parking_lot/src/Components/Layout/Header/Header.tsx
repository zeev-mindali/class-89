import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>גאולה כהן 6-8 מצבת רכבים וחניות</h1>
      <NavLink to="/"> דף הבית </NavLink>|
      <NavLink to="/parkingList"> רשימת חניות </NavLink>|
      <NavLink to="/about"> אודות הכיתה הכי טובה </NavLink>
    </div>
  );
}

export default Header;
