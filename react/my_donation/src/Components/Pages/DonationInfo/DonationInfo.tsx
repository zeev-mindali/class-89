import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DonationInfo.css";

function DonationInfo(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const mySum = +(params.sum || 0);
  const [sum, setSum] = useState(mySum);
  const [donar, setDonar] = useState("");
  const [memo, setMemo] = useState("");

  const makeDonation = () => {
    //save to local hdd
    //navigate to thank you
    navigate("/thanks");
  };
  return (
    <div className="DonationInfo">
      <h1>Donation info</h1>
      <hr />
      <div className="Box">
        <input
          type="text"
          onChange={(args) => setDonar(args.target.value)}
          placeholder="donar name..."
        />
        <br />
        <br />
        {params.sum === "0" ? (
          <input
            type="number"
            onChange={(args) => setSum(+args.target.value)}
            placeholder="donation sum..."
          />
        ) : (
          <h2>{params.sum} nis</h2>
        )}
        <br />
        <br />
        <input
          type="text"
          onChange={(args) => setMemo(args.target.value)}
          placeholder="Memo ...."
        />
        <br />
        <br />
        <button onClick={makeDonation}>Make Donation</button>
      </div>
    </div>
  );
}

//doner name
//donation sum disabled
//donation memo
//button

export default DonationInfo;
