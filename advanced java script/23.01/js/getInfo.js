//getCarTruck
//getBike
//getTruck
//getHandiCap
//getRecall
//getOffroad

const locateCar = async () => {
  //get car id from input text box
  const carID = document.getElementById("carNumber").value;
  //check if we have a car...
  await getCarTruck(carID)
    .then((data) => {
      if (data != null) {
        //we have a car, check for handicap
        let isHandiCap = await getHandiCap(carID);
      } else {
        //check truck or bike
      }
    })
    .then(
      await getOffroad(carID).then((data) => {
        //show if offroad
      })
    )
    .then(
      await getRecall(carID).then((data) => {
        //check if it offroad
      })
    );
    console.log("me here")
};
