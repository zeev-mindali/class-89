import { useEffect } from "react";
import Car from "../../Modal/Car";
import { CarDownloadedAction } from "../../Redux/CarReducer";
import { store } from "../../Redux/store";
import MainRoutes from "../../Routes/MainRoutes/MainRoutes";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    useEffect(()=>{
       updateData()
    },[])
    
    const updateData = async()=>{
        if (localStorage.getItem("parking") === null) { 
            let tempCar = [];
            for (let index = 0; index < 190; index++) {
              tempCar.push(new Car("na", "na", "na", 0, 0, 0, index));
            }
            localStorage.setItem("parking", JSON.stringify(tempCar));
          } 
    }
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <main>
        <MainRoutes />
      </main>
    </div>
  );
}

export default MainLayout;
