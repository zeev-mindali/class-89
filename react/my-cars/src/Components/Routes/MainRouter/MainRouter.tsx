import { Route, Routes } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddNew from "../../Pages/AddNew/AddNew";
import Bike from "../../Pages/Bike/Bike";
import Car from "../../Pages/Car/Car";
import CityStreet from "../../Pages/CityStreet/CityStreet";
import HandiCap from "../../Pages/HandiCap/HandiCap";
import OffRoad from "../../Pages/OffRoad/OffRoad";
import Page404 from "../../Pages/Page404/Page404";
import Truck from "../../Pages/Truck/Truck";
import "./MainRouter.css";

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/car" element={<Car />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/truck" element={<Truck />} />
        <Route path="/handicap" element={<HandiCap />} />
        <Route path="/addnew" element={<AddNew />} />
        <Route path="/offroad" element={<OffRoad />} />
        <Route path="/citystreet" element={<CityStreet />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
