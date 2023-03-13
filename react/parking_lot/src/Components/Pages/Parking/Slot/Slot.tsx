import { useNavigate } from "react-router-dom";
import Car from "../../../Modal/Car";
import "./Slot.css";

interface carProps {
  carData: Car;
}

function Slot(props: carProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="Slot Box">
      <h2>{props.carData.getParkingNumber() + 1}</h2>
      <hr />
      <h3>
        {props.carData.getCarNum() !== "na"
          ? props.carData.getCarNum()
          : "לא הוקצה"}
        <br />
        {props.carData.getCarNum() !== "na" && props.carData.getCarOwner()}
        <button
          onClick={() => navigate(`/edit/${props.carData.getParkingNumber()}`)}
        >
          מידע נוסף
        </button>
        <br />
      </h3>
    </div>
  );
}

export default Slot;
