import { useNavigate } from "react-router-dom";
import "./SingleDonation.css";

interface SingleProps {
  donationSum: number;
}

function SingleDonation(props: SingleProps): JSX.Element {
  const navigate = useNavigate();
  //console.log("value: ",props.donationSum);
  return (
    <div className="SingleDonation Box">
      <div className="DonateSum">
        {props.donationSum === 0 ? "Other" : props.donationSum}
        {props.donationSum === 0 && ":)"}
      </div>
      <br />
      <button onClick={() => navigate(`/info/${props.donationSum}/0/0/0`)}>
        Donate
      </button>
    </div>
  );
}

export default SingleDonation;
