//url : https://restcountries.com/
$(function () {
  console.log("zeev");
  $("#container").html(`
        <div class="Box">
            <img src=${mockData.flags.png} width=100/>
            ${mockData.name.common}<br/>
            ${mockData.capital}<br/>
            ${mockData.population}<br/>
            ${mockData.continents}<br/>
            
        </div>
    `);
  console.log();
});

const mockData = {
  name: {
    common: "Austria",
    official: "Republic of Austria",
    nativeName: {
      bar: {
        official: "Republik Österreich",
        common: "Österreich",
      },
    },
  },
  tld: [".at"],
  cca2: "AT",
  ccn3: "040",
  cca3: "AUT",
  cioc: "AUT",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
  },
  idd: {
    root: "+4",
    suffixes: ["3"],
  },
  capital: ["Vienna"],
  altSpellings: ["AT", "Osterreich", "Oesterreich"],
  region: "Europe",
  subregion: "Central Europe",
  languages: {
    bar: "Austro-Bavarian German",
  },
  translations: {
    ara: {
      official: "جمهورية النمسا",
      common: "النمسا",
    },
    bre: {
      official: "Republik Aostria",
      common: "Aostria",
    },
    ces: {
      official: "Rakouská republika",
      common: "Rakousko",
    },
    cym: {
      official: "Gweriniaeth Awstria",
      common: "Awstria",
    },
    deu: {
      official: "Republik Österreich",
      common: "Österreich",
    },
    est: {
      official: "Austria Vabariik",
      common: "Austria",
    },
    fin: {
      official: "Itävallan tasavalta",
      common: "Itävalta",
    },
    fra: {
      official: "République d'Autriche",
      common: "Autriche",
    },
    hrv: {
      official: "Republika Austrija",
      common: "Austrija",
    },
    hun: {
      official: "Ausztria",
      common: "Ausztria",
    },
    ita: {
      official: "Repubblica d'Austria",
      common: "Austria",
    },
    jpn: {
      official: "オーストリア共和国",
      common: "オーストリア",
    },
    kor: {
      official: "오스트리아 공화국",
      common: "오스트리아",
    },
    nld: {
      official: "Republiek Oostenrijk",
      common: "Oostenrijk",
    },
    per: {
      official: "جمهوری اتریش",
      common: "اتریش",
    },
    pol: {
      official: "Republika Austrii",
      common: "Austria",
    },
    por: {
      official: "República da Áustria",
      common: "Áustria",
    },
    rus: {
      official: "Австрийская Республика",
      common: "Австрия",
    },
    slk: {
      official: "Rakúska republika",
      common: "Rakúsko",
    },
    spa: {
      official: "República de Austria",
      common: "Austria",
    },
    swe: {
      official: "Republiken Österrike",
      common: "Österrike",
    },
    tur: {
      official: "Avusturya Cumhuriyeti",
      common: "Avusturya",
    },
    urd: {
      official: "جمہوریہ آسٹریا",
      common: "آسٹریا",
    },
    zho: {
      official: "奥地利共和国",
      common: "奥地利",
    },
  },
  latlng: [47.33333333, 13.33333333],
  landlocked: true,
  borders: ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
  area: 83871.0,
  demonyms: {
    eng: {
      f: "Austrian",
      m: "Austrian",
    },
    fra: {
      f: "Autrichienne",
      m: "Autrichien",
    },
  },
  flag: "🇦🇹",
  maps: {
    googleMaps: "https://goo.gl/maps/pCWpWQhznHyRzQcu9",
    openStreetMaps: "https://www.openstreetmap.org/relation/16239",
  },
  population: 8917205,
  gini: {
    2018: 30.8,
  },
  fifa: "AUT",
  car: {
    signs: ["A"],
    side: "right",
  },
  timezones: ["UTC+01:00"],
  continents: ["Europe"],
  flags: {
    png: "https://flagcdn.com/w320/at.png",
    svg: "https://flagcdn.com/at.svg",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/at.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/at.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [48.2, 16.37],
  },
  postalCode: {
    format: "####",
    regex: "^(\\d{4})$",
  },
};
