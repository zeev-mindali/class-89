import Donation from "../../../models/donation";
import "./DonationList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DonationList(): JSX.Element {
  /*const donationList:Donation[] = JSON.parse(localStorage.getItem("userDonation"));*/
  const [donationList,setList] = useState<Donation[]>([]);
  const navigate = useNavigate();

  useEffect(()=>{
    setList(JSON.parse(localStorage.getItem("userDonation")));
  },[]);

  //console.log("donation list: ",donationList);

  const getDate = (timeStamp:number)=>{
    return new Date(timeStamp).toLocaleString(); //convert timestamp 5746387832=>local date 08/03/2023
  }

  const deleteDonation = (timeStamp:number)=>{
    //1,2,3,4,5  filter=>item !=5
    //1,2,3,4
    const newList = donationList.filter(item=>item.timeStamp!=timeStamp);

    localStorage.setItem("userDonation", JSON.stringify(newList)); 
    setList(newList);
  }

  return (
    <div className="DonationList">
      <h1>Donation list</h1>
      <hr />
      <table>
          <thead>
            <tr>
            <th>Date</th>
            <th>Name</th>
            <th>sum</th>
            <th>memo</th>
            <th>edit</th>
            <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {donationList.map(donation=>
            <tr key={donation.timeStamp}>
              <td>{getDate(donation.timeStamp)}</td>
              <td>{donation.donarName}</td>
              <td>{donation.donarSum}</td>
              <td>{donation.donarMemo}</td>
              <td onClick={()=>navigate(`/info/${donation.donarSum}/${donation.donarName}/${donation.donarMemo}/${donation.timeStamp}`)}>✏️</td>
              <td onClick={()=>deleteDonation(donation.timeStamp)}>❌</td>
            </tr>
            )}
          </tbody>
      </table>
    </div>
  );
}

export default DonationList;
