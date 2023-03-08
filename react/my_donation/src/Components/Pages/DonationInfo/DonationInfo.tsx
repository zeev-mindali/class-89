import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Donation from "../../../models/donation";
import "./DonationInfo.css";

function DonationInfo(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const userDonation = +(params.donationSum || 0);
  const [sum, setSum] = useState(userDonation);
  const [donar, setDonar] = useState("");
  const [memo, setMemo] = useState("");
  let myDonations:Donation[] = [];

  //console.log("value: ",userDonation);

  const makeDonation = () => {
    const timeStamp = new Date().getTime();
    //navigate to thank you
    //object = timeStamp, donarName, sum, memo;
    const itemToSave = new Donation(timeStamp,donar,sum,memo);
    //console.log(itemToSave);
    //save to local hdd
    if (localStorage.getItem("userDonation")){
      myDonations=JSON.parse(localStorage.getItem("userDonation"));
    } 
    //myDonations = Object
    myDonations.push(itemToSave);
    localStorage.setItem("userDonation", JSON.stringify(myDonations));
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
        {userDonation === 0 ? (
          <input
            type="number"
            onChange={(args) => setSum(+args.target.value)}
            placeholder="donation sum..."
          />
        ) : (
          <h2>{userDonation} nis</h2>
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
