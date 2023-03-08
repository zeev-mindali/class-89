import Donation from "../../../models/donation";
import "./DonationList.css";

function DonationList(): JSX.Element {
  const donationList:Donation[] = JSON.parse(localStorage.getItem("userDonation"));
  console.log("donation list: ",donationList);
  return (
    <div className="DonationList">
      <h1>Donation list</h1>
      <hr />
      <table>
          <thead>
            <th>Date</th>
            <th>Name</th>
            <th>sum</th>
            <th>memo</th>
            <th>edit</th>
            <th>delete</th>
          </thead>
          <tbody>
            {donationList.map(donation=>
            <tr key={donation.timeStamp}>
              <td>{donation.timeStamp}</td>
              <td>{donation.donarName}</td>
              <td>{donation.donarSum}</td>
              <td>{donation.donarMemo}</td>
              <td>✏️</td>
              <td>❌</td>
            </tr>
            )}
          </tbody>
      </table>
    </div>
  );
}

export default DonationList;
