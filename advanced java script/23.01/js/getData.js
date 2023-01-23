const getCarTruck = (carID) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      reject("Error, can not connecet to api...");
    }, 5000);

    let myData = new Object();
    try {
      await fetch(urlCar + carID)
        .then((response) => response.json())
        .then(async (data) => {
          if (data.result.records.length > 0) {
            let newCar = data.result.records[0];
            myData.mispar_rechev = newCar.mispar_rechev;
            myData.tozeret_nm = newCar.tozeret_nm;
            myData.kinuy_mishari = newCar.kinuy_mishari;
            myData.tzeva_rechev = newCar.tzeva_rechev;
            myData.shnat_yitzur = newCar.shnat_yitzur;
            myData.tokef_dt = newCar.tokef_dt;
            myData.handicap = await getHandiCap(carID);
          }
        })
        .catch((err) => {
          //console.log(err);
          reject("url not found");
        });
    } catch (err) {
      (err) => {
        console.log("Huston, we have a problem:\n" + err);
        reject(err);
      };
    } finally {
      console.log("close the connection");
    }
    resolve(myData);
  });
};

const getHandiCap = async (carID) => {
  return new Promise((resolve, reject) => {
    var urlTimeout = setTimeout(() => {
      reject("Error, can not connecet to api...");
    }, 5000);

    fetch(urlHandiCap + carID)
      .then((response) => response.json())
      .then((data) => {
        clearTimeout(urlTimeout);
        resolve(data.result.records.length > 0);
      });
    resolve(true);
  });
};

const getBike = async (carID) => {};

const getTruck = async (carID) => {};

const getRecall = (carID) => {
  let returnData = [];
  return new Promise(async (resolve, reject) => {
    var urlTimeOut = setTimeout(() => {
      reject("Error, can not connecet to api...");
    }, 5000);
    await fetch(urlRecall + carID)
      .then((response) => response.json())
      .then((data) => {
        if (data.result.records.length > 0) {
          data.result.records.map((item) => {
            let newData = new Object();
            newData.SUG_RECALL = item.SUG_RECALL;
            newData.SUG_TAKALA = item.SUG_TAKALA;
            newData.TEUR_TAKALA = item.TEUR_TAKALA;
            returnData.push(newData);
          });
        }
      });
    clearTimeout(urlTimeOut);
    resolve(returnData);
  });
};

const getOffroad = async (carID) => {};
