import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Car from "../../Modal/Car";
import "./Edit.css";

function Edit(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const [carData, setData] = useState<Car>();

  useEffect(() => {
    const allData = localStorage.getItem("parking");
    
  }, []);
  return <div className="Edit"></div>;
}

export default Edit;
