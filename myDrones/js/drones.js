var droneList = [];

const checkForData = () => {
  console.log(localStorage.getItem("myData"));
  droneList = JSON.parse(localStorage.getItem("myData"));
  console.log(droneList);
};

checkForData(); //iife

const addNewDrone = () => {
  const newDrone = new Object();
  newDrone.owner = document.getElementById("ownerName").value;
  newDrone.date = new Date();
  newDrone.vip = document.getElementById("isVIP").checked;
  newDrone.manufactor = document.getElementById("manufactor").value;
  droneList.push(newDrone);
  console.log(droneList);
  //this line will not work, since droneList Object
  //localStorage.setItem("myData", droneList);
  //we will convert our object to json
  localStorage.setItem("myData", JSON.stringify(droneList));
};
