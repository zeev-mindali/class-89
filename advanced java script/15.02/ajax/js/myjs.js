const url = "https://restcountries.com/v3.1/all";
//const total = 20;
let allCountries = [];
let totalPopulation = 0;
const countries = 2;

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
  }
  $("#total").html(totalPopulation);
};
