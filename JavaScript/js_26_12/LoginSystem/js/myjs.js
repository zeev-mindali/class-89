function makeLogin() {
  console.log("i am in login");

  //uName = admin && uPass = admin
  var uName = document.getElementById("uName").value;
  var uPass = document.getElementById("uPass").value;
  var res = document.getElementById("res");
  //console.log(uName.value, uPass.value);

  if (uName == "admin" && uPass == "admin") {
    res.innerText = "Hello my master...";
  } else {
    res.innerText = "Why Who are you????";
  }
}

function calc() {
  var price = +document.getElementById("price").value;
  //console.log(typeof price);
  var res2 = document.getElementById("res2");
  res2.innerText = price * 1.17;
}
