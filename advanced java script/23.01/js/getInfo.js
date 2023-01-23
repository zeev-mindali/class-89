//getCarTruck
//getBike
//getTruck
//getHandiCap
//getRecall
//getOffroad

const locateCar = async () => {
  const carID = document.getElementById("carNumber").value;
  await getCarTruck(carID)
    .then((data) => {
      if (data != null) {
        //we have a car, check for handicap
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
};
