Array.prototype.lastOne = function () {
  //last item
  //let lastOne = myArr[myArr.length - 1];
  let lastOne = this[this.length - 1];

  //-100 style1
  //-10,000 style2
  //-100,000 style3
  //style4

  const sum = +lastOne.split("-")[1];
  let style = "";
  if (sum < 100) {
    style = "style1";
  } else if (sum < 10000) {
    style = "style2";
  } else if (sum < 100000) {
    style = "style3";
  } else {
    style = "style4";
  }
  document.getElementById(
    "lastDonar"
  ).innerHTML = `<div class='${style}'>${lastOne}</div><div class="${style}">${new Date().toDateString()}</div>`;
};

Number.prototype.toILS = function () {
  return this * 3.5;
};

function toILS(sum) {
  if (typeof sum == "Number") {
    return sum * 3.5;
  }
}
