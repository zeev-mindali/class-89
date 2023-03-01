import "./SingleDonation.css";

interface SingleProps {
  donationSum: number;
}

function SingleDonation(props: SingleProps): JSX.Element {
  return (
    <div className="SingleDonation Box">
      <h1>{props.donationSum == 0 ? "Other sum" : props.donationSum}</h1>
      <br />
      <br />
      <br />
      <input type="button" />
    </div>
  );
}

export default SingleDonation;
