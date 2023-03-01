import "./AddDonation.css";
import SingleDonation from "./SingleDonation/SingleDonation";

function AddDonation(): JSX.Element {
  const paymentSums = [18, 36, 180, 360, 1800, 3600, 0];
  return (
    <div className="AddDonation">
      <div >Add donation</div>
      {paymentSums.map((item) => (
        <SingleDonation donationSum={item} />
      ))}
    </div>
  );
}

export default AddDonation;
