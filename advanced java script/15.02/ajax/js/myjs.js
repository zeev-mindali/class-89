const url = "https://restcountries.com/v3.1/all";
//const total = 20;
let allCountries = [];
let totalPopulation = 0;
const countries = 2;
const myRegions = {};

$(async () => {
  allCountries = await $.get(url);
  $("#totalContries").html(countries);
  getData(countries);
});

const getData = (total) => {
  $("#container").html("");
  for (let counter = 0; counter < total; counter++) {
    $("#container").append(`
                  <div class="Box">
                      <img src=${allCountries[counter].flags.png} width=100/><br/>
                      ${allCountries[counter].name.common}<br/>
                      ${allCountries[counter].capital}<br/>
                      ${allCountries[counter].population}<br/>
                      ${allCountries[counter].continents}<br/>
                  </div>
              `);
    totalPopulation += allCountries[counter].population;
    //console.log(allCountries[counter].region);
    //check if the data inside the object literal is null
    if (myRegions[allCountries[counter].region] == null) {
      //if it's null, it's new region, and we can set the number to 1, since it's the first one
      myRegions[allCountries[counter].region] = 1;
    } else {
      //the region already exists in the literal object, therefor , we can add 1 to count it.
      myRegions[allCountries[counter].region] += 1;
    }
  }
  $("#total").html(totalPopulation);

  console.log(myRegions);

  makeHorTable();
  makeVerTable();
};

const makeHorTable = () => {
  let tableHor = "<table style='margin:auto;'>";
  tableHor += "<thead>";
  for (singleRegion in myRegions) {
    tableHor += `<th>${singleRegion}</th>`;
  }
  tableHor += "</thead>";
  tableHor += "<tbody><tr>";
  for (singleRegion in myRegions) {
    tableHor += `<td>${myRegions[singleRegion]}</td>`;
  }
  tableHor += "</tr></tbody>";
  tableHor += "</table>";

  $("#tableHor").html(tableHor);
};

const makeVerTable = () => {
  let tableVer = "<table style='margin:auto;'>";

  for (singleRegion in myRegions) {
    tableVer += `<tr><td><b>${singleRegion}</b></td><td>${myRegions[singleRegion]}</td></tr>`;
  }
  tableVer += "</table>";
  $("#tableVer").html(tableVer);
};
