//getCarTruck
//getBike
//getTruck
//getHandiCap
//getRecall
//getOffroad

const locateCar = async () => {
  const carID = document.getElementById("carNumber").value;
  //object literl
  let newCar = new Object();

  await getCarTruck(carID)
    .then((data) => {
      if (data) {
        newCar = data;
      }
    })
    .catch((err) => console.log(err));

  await getRecall(carID).then((data) => (newCar.recall = data));

  console.log(newCar);
};

const locateCar_old = async () => {
  //get car id from input text box
  const carID = document.getElementById("carNumber").value;
  //check if we have a car...
  //   getCarTruck(carID)
  //     .then((data) => {
  //       if (data != null) {
  //         //we have a car, check for handicap
  //         let isHandiCap = getHandiCap(carID);
  //       } else {
  //         //check truck or bike
  //       }
  //     })
  //     .then(
  //       getOffroad(carID).then((data) => {
  //         //show if offroad
  //       })
  //     )
  //     .then(
  //       getRecall(carID).then((data) => {
  //         //check if it offroad
  //       })
  //     );
  //   console.log("me here");
};
