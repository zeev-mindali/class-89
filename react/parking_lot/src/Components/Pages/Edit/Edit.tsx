import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Car from "../../Modal/Car";
import "./Edit.css";

function Edit(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const tempCar = new Car("na", "na", "na", 0, 0, 0, 0);
  const [carData, setData] = useState<Car>(tempCar);

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("parking"));
    const parkingNumber = +params.parkingNumber;
    const singleData = allData.filter(
      (item: Car) => item.parkingNumber === parkingNumber
    );
    //console.log(singleData);
    //setData(singleData);
  }, []);

//carNum,carOwner,ownerPhone,ownerFlat,ownerCars,ownerBuilding,parkingNumber

  return (
    <div className="Edit Box">
      <h2>{carData.parkingNumber}</h2>
      <hr />
      
    </div>
  );
}

export default Edit;
