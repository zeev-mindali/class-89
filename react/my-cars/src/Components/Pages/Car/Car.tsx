import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { SyntheticExpression } from "typescript";
import CarInfo from "../../../models/CarInfo";
import SingleItem from "../SingleItem/SingleItem";
import "./Car.css";

function Car(): JSX.Element {
  const url =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=50";

  //we in react using the axios, for getting fast api (get,put,delete,post)
  //install : npm i axios

  const [carList, setList] = useState([]);

  const getData = async () => {
    const myCarData = (await axios.get(url)).data.result.records;
    console.log(myCarData);
    setList(myCarData);
  };

  return (
    <div className="Car">
      <br />
      <br />
      <input type="button" value="give me 50 cars" onClick={getData} />
      <hr />
      <div className="CarList">
        {carList.map((item) => (
          <SingleItem
            key={item.mispar_rechev}
            mispar_rechev={item.mispar_rechev}
            tozeret_nm={item.tozeret_nm}
            tzeva_rechev={item.tzeva_rechev}
            shnat_yitzur={item.shnat_yitzur}
          />
        ))}
      </div>
    </div>
  );
}

export default Car;
