const url =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

const locateCar = () => {
  //create an url with lpr
  const lpr = document.getElementById("lpr").value;

  fetch(url + lpr) //go to the server and get the data
    .then((response) => response.json()) //convert the response to json
    .then((data) => console.log(data.result.records[0])); //convert the information to our data
};
