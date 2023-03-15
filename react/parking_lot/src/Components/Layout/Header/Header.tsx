import { useState } from "react";
import { NavLink } from "react-router-dom";
import { store } from "../../Redux/store";
import "./Header.css";

function Header(): JSX.Element {
    // store.subscribe(()=>{
    //     setTotal(store.getState().CarState.cars.length);
    // })

    const [totalCar,setTotal] = useState(0)
  return (
    <div className="Header">
      <h1>גאולה כהן 6-8 מצבת רכבים וחניות</h1>
      <NavLink to="/"> דף הבית </NavLink>|
      <NavLink to="/parkingList"> רשימת חניות </NavLink>|
      <NavLink to="/about"> אודות הכיתה הכי טובה </NavLink>|
      <span>total cars: {totalCar}</span>
    </div>
  );
}

export default Header;
