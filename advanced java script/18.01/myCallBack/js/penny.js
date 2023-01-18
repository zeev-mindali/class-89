var shaldon = setInterval(() => {
  console.log("(knock knock) Penny");
}, 1000);

var penny = setTimeout(() => {
  clearInterval(shaldon);
  console.log("WHAT SHALDON !!!!");
}, 3000);
