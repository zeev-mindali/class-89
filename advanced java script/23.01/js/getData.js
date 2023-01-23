const getCarTruck = async (carID) => {
  return await fetch(urlCar + carID)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length > 0 ? data.result.records[0] : null
    );
};

const getHandiCap = async (carID) => {
  return await fetch(urlHandiCap + carID)
    .then((response) => response.json())
    .then((data) => data.result.records.length > 0);
};

const getBike = async (carID) => {};

const getTruck = async (carID) => {};

const getRecall = async (carID) => {};

const getOffroad = async (carID) => {};
