var myData = [];
var income = 0;
var outcome = 0;

const myAction = () => {
  var trans = new Object();
  trans.desc = document.getElementById("desc").value;
  trans.action = document.getElementById("action").value;
  trans.sum = +document.getElementById("cash").value;
  trans.action == "deposit" ? (income += trans.sum) : (outcome += trans.sum);
  trans.memo = document.getElementById("memo").value;
  trans.transDate = document.getElementById("actionDate").value;
  myData.push(trans);
  makeTable();
};

const makeTable = () => {
  var data = "";
  myData.map((item) => {
    data += `
            <tr style="color:${item.action == "deposit" ? "green" : "red"}">
                <td>${item.transDate}</td>
                <td>${item.desc}</td>
                <td>${item.sum}</td>
                <td>${item.memo}</td>                
            </tr>
        `;
  });
  document.getElementById(
    "myResult"
  ).innerHTML = `income: ${income} outcome: ${outcome}  balance: ${
    income - outcome
  }`;
  console.log(data);
  document.getElementById("userData").innerHTML = data;
};

//   if (trans.action == "deposit") {
//     income += trans.action;
//   } else {
//     outcome += trans.action;
//   }
