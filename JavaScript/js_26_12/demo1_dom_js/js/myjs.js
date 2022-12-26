console.log("Hello world !!!");

function sayHiToHilla() {
  //get the object that named : hila
  var hila = document.getElementById("hila");
  //change the inner of the element to other message;
  hila.innerHTML = "Hello Hila";
}

//get the object that named : hila
var hila = document.getElementById("hila");
//change the inner of the element to other message;
hila.innerHTML = "Hello Hila";

//get all elements that have the same id
var names = document.getElementsByName("uName");
//names -> array
var singleName = "Nadav";
for (var index = 0; index < names.length; index++) {
  names[index].innerText = singleName;
}

function giveUmbrella() {
  var res = document.getElementById("res");
  res.innerText = singleName + " got an umbrella";
}
