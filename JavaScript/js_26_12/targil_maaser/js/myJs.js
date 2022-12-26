const calc = (amount) => {
  var salary = +document.getElementsByClassName("salary")[0].value;

  var res1 = document.getElementById("res10");
  res1.innerHTML = salary * (amount / 100);

  //   var res1 = document.getElementById("res10");
  //   res1.innerText = salary * 0.1;

  //   var res2 = document.getElementById("res20");
  //   res2.innerText = salary * 0.2;
};
