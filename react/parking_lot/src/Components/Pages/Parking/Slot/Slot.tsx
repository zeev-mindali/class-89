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
      <h2>{props.carData.parkingNumber + 1}</h2>
      <hr />
      {props.carData.carNum === "na" ? "לא מוקצה" : props.carData.carNum}
      <br />
      {props.carData.carNum !== "na" && props.carData.carOwner}
      <br />
      <button onClick={() => navigate(`/edit/${props.carData.parkingNumber}`)}>
        מידע נוסף
      </button>
    </div>
  );
}

export default Slot;
