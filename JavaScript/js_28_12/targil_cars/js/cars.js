var cars = [];

// var singleCar = {
//   carNumber: 0,
//   carType: "",
//   carFuel: "",
//   carYear: 0,
//   carLic: false,
// };

const sayHi = () => {
  alert("hi Hila :o)");
};

const handleData = () => {
  //pointers
  const carNumber = document.getElementById("carNumber").value;
  const carType = document.getElementById("carType").value;
  const carFuels = document.getElementsByName("carFuel");
  const carYear = +document.getElementById("year").value;
  const carLic = document.getElementById("license").checked;

  var fuel = "";
  carFuels.forEach((item) => {
    if (item.checked) {
      fuel = item.value;
    }
  });

  //console.log(carNumber, carType, fuel, carYear, carLic);

  const newCar = new Object();

  newCar.carNumber = carNumber;
  newCar.carType = carType;
  newCar.carFuel = fuel;
  newCar.carYear = carYear;
  newCar.carLic = carLic;

  //newCar.nudnik = "Arik && Ido";
  //console.log(newCar);

  cars.push(newCar);
  makeTableData();
};

const makeTableData = () => {
  var tableData = document.getElementById("carList");
  var data = ""; //string

  cars.map((item) => {
    data += `
            <tr>
                <td>${item.carNumber}</td>
                <td>${item.carType}</td>
                <td>${item.carFuel}</td>
                <td>${item.carYear}</td>
                <td>${item.carLic ? "✔" : "❌"}</td>
                <td>🖊</td>
                <td>🗑</td>
            </tr>
        `;

    //data += "<tr><td>"+item.carNumber+"</td><td>"+item.carType
  });
  tableData.innerHTML = data;
};

const handleData_old = () => {
  //   alert("אתה ממש קרציה");
  const carFuels = document.getElementsByName("carFuel");
  var carFuel = "";
  for (var index = 0; index < carFuels.length; index++) {
    if (carFuels[index].checked) {
      //console.log(carFuels[index].value);
      carFuel = carFuels[index].value;
      break;
    }
    //console.log(index);
  }
  console.log(carFuel);
};
