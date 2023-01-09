var droneList = [];

Date.prototype.addDays = (days) => {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const checkForData = () => {
  console.log(localStorage.getItem("myData"));
  droneList = JSON.parse(localStorage.getItem("myData"));
  console.log(droneList);
  insertData();
};

const pretifyDate = (date) => {
  //console.log("my date is type of : ", typeof date);
  const myDate = date.toString().split("T")[0];
  //console.log(myDate);
  const myNewDate = myDate.split("-");
  //console.log(myNewDate);
  return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
};

const eta = (item) => {
  if (item.vip) {
    var myDate = new Date(Date.parse(item.date));
    console.log(typeof myDate);
    item.date.addDays(7);
  } else {
    item.date.addDays(30);
  }

  return pretifyDate(myDate);
};

const insertData = () => {
  const tableData = document.getElementById("droneList");
  var myHTML = "";
  droneList.map((item) => {
    myHTML += `
        <tr>
            <td>${item.owner}</td>
            <td>${pretifyDate(item.date)}</td>
            <td>${item.vip ? "😁" : "😥"}</td>
            <td>${item.manufacture}</td>
            <td>${eta(item)}</td>
        </tr>
    `;
  });
  tableData.innerHTML = myHTML;
};

checkForData(); //iife

const addNewDrone = () => {
  const newDrone = new Object();
  newDrone.owner = document.getElementById("ownerName").value;
  newDrone.date = new Date();
  newDrone.vip = document.getElementById("isVIP").checked;
  newDrone.manufacture = document.getElementById("manufacture").value;
  droneList.push(newDrone);
  console.log(droneList);
  //this line will not work, since droneList Object
  //localStorage.setItem("myData", droneList);
  //we will convert our object to json
  localStorage.setItem("myData", JSON.stringify(droneList));
};
