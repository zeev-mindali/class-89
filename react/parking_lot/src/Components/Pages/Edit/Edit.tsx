import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Car from "../../Modal/Car";
import "./Edit.css";
import { useForm } from "react-hook-form";

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

  //dealing with forms.....

  //להחצין את הספריות של הטיפול בטופס
  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Car>();

  //handle once the data was send to me
  const send = (carData: Car) => {
    console.log(carData);
  };

  return (
    <div className="Edit Box">
      <h2>{+params.parkingNumber + " חנייה מספר "}</h2>
      <hr />
      <form onSubmit={handleSubmit(send)}>
        <input
          type="text"
          placeholder="car number..."
          {...register("carNum", {
            required: {
              value: true,
              message: "אינעל אבוק, איפה מספר הרכב?",
            },
            minLength: { value: 3, message: "מספר רכב קצר מדי נעל" },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.carNum?.message}</span>
        <input
          type="text"
          placeholder="car owner..."
          {...register("carOwner")}
        />
        <br />
        <input
          type="text"
          placeholder="owner phone..."
          {...register("ownerPhone")}
        />
        <br />
        <input
          type="number"
          placeholder="owner flat..."
          {...register("ownerFlat")}
        />
        <br />
        <input
          type="number"
          placeholder="owner cars..."
          {...register("ownerCars")}
        />
        <br />
        <input
          type="number"
          placeholder="owner building..."
          {...register("ownerBuilding")}
        />
        <br />
        <input
          type="hidden"
          value={+params.parkingNumber}
          {...register("parkingNumber")}
        />
        <input type="submit" value="שינוי" />
        <input type="button" value="ביטול" />
      </form>
    </div>
  );
}

export default Edit;
