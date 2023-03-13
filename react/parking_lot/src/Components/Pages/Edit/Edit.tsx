import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Car from "../../Modal/Car";
import "./Edit.css";
import { useForm } from "react-hook-form";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";

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

  const requiredTemplate = {
    required: {
      value: true,
      message: "שדה זה הינו חובה מתן!!!!",
    },
  };
  return (
    <div className="Edit Box">
      <Typography variant="h2" className="HeadLine">
        {+params.parkingNumber + " חנייה מספר "}
      </Typography>
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
        <br />
        <Person style={{ fontSize: 40, margin: 10 }} />
        <TextField
          label="Car Owner"
          variant="outlined"
          inputProps={{ sx: { color: "white" } }}
          {...register("carOwner", {
            required: { value: true, message: "למה מי אתה?" },
            min: { value: 5, message: "שם קצר מדי, אתה לא דובי גל" },
          })}
        />
        <span className="ErrMsg">{errors.carNum?.message}</span>
        <br />
        <input
          type="text"
          placeholder="car owner..."
          {...register("carOwner", {
            required: { value: true, message: "למה מי אתה?" },
            min: { value: 5, message: "שם קצר מדי, אתה לא דובי גל" },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.carOwner?.message}</span>
        <br />
        <input
          type="text"
          placeholder="owner phone..."
          {...register("ownerPhone", requiredTemplate)}
        />
        <br />
        <span className="ErrMsg">{errors.ownerPhone?.message}</span>
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
        <br />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          fullWidth
        >
          <Button color="secondary">ביטול</Button>
          <Button color="primary" type="submit">
            שינוי
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default Edit;
