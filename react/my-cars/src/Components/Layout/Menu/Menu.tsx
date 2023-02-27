import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <h1>Main Menu</h1>
      <hr />
      <NavLink to="/">Home Page</NavLink>
      <br />
      <br />
      <NavLink to="/car">Find Car</NavLink>
      <br />
      <br />
      <NavLink to="/bike">Find Bike</NavLink>
      <br />
      <br />
      <NavLink to="/truck">Find Truck</NavLink>
      <br />
      <br />
      <NavLink to="/handicap">Find HandiCap</NavLink>
      <br />
      <br />
      <NavLink to="/offroad">Find Off road</NavLink>
      <br />
      <br />
      <NavLink to="/citystreet">find city and street</NavLink>
      <hr />
      <NavLink to="/addnew">
        <h2>Add New vehicle</h2>
      </NavLink>
    </div>
  );
}

export default Menu;
