import { useEffect, useState } from "react";
import Car from "../../Modal/Car";
import "./Parking.css";
import Slot from "./Slot/Slot";

function Parking(): JSX.Element {
  //let parking:Car[] = [];
  const [parking, setParking] = useState<Car[]>([]);

  useEffect(() => {
    if (localStorage.getItem("parking") === null) {
      let tempCar = [];
      for (let index = 0; index < 190; index++) {
        tempCar.push(new Car("na", "na", "na", 0, 0, 0, index));
      }
      localStorage.setItem("parking", JSON.stringify(tempCar));
      setParking(tempCar);
    } else {
      setParking(JSON.parse(localStorage.getItem("parking")));
    }
  }, []);

  return (
    <div className="Parking">
      <h1>Parking List</h1>

      {parking.map((item) => (
        <Slot key={item.parkingNumber} carData={item} />
      ))}
    </div>
  );
}

export default Parking;
