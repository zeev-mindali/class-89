import Donation from "../../../models/donation";
import "./DonationList.css";

function DonationList(): JSX.Element {
  const donationList:Donation[] = JSON.parse(localStorage.getItem("userDonation"));
  //console.log("donation list: ",donationList);

  const getDate = (timeStamp:number)=>{
    return new Date(timeStamp).toLocaleString(); //convert timestamp 5746387832=>local date 08/03/2023
  }

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
              <td>{getDate(donation.timeStamp)}</td>
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
