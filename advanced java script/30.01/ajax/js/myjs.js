const url = "https://restcountries.com/v3.1/all";
//const total = 20;
let allCountries = [];

$(function () {
  $("#myRange").on("input", (value) => {
    $("#totalContries").html(`${value.target.value}`);
    getData(value.target.value);
  });
});

$(async () => {
  allCountries = await $.get(url);
});

// const getData = (total) => {
//   $("#container").html("");
//   for (let counter = 0; counter < total; counter++) {
//     const randomNumber = Math.floor(Math.random() * allCountries.length);
//     $("#container").append(`
//                 <div class="Box">
//                     <img src=${allCountries[randomNumber].flags.png} width=100/><br/>
//                     ${allCountries[randomNumber].name.common}<br/>
//                     ${allCountries[randomNumber].capital}<br/>
//                     ${allCountries[randomNumber].population}<br/>
//                     ${allCountries[randomNumber].continents}<br/>

//                 </div>
//             `);
//   }
// };

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
  }
};
