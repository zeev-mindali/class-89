const getCarTruck = async (carID) => {
  return await fetch(urlCar + carID)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length > 0 ? data.result.records[0] : null
    );
};

const getBike = async (carID) => {};

const getTruck = async (carID) => {};

const getHandiCap = async (carID) => {};

const getRecall = async (carID) => {};

const getOffroad = async (carID) => {};
