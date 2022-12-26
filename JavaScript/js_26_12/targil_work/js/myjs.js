var todoList = [];
var todoListTime = [];

const addTodo = (todoItem, todoTime) => {
  //console.log(todoItem);
  console.log(todoItem, todoTime);
  todoList.push(todoItem);
  todoListTime.push(todoTime);
  console.log(todoList);
  console.log(todoListTime);
  clearText();
  document.getElementById("todoList").innerHTML = createList();
};

const createList = () => {
  var res = "";
  for (var index = 0; index < todoList.length; index++) {
    //res += `<li>${todoList[index]}</li>`;
    //res += "<li>"+todoList[index]+"</li>";
    switch (todoListTime[index]) {
      case "urgent":
        res += "<li style='color:red'>";
        break;
      case "need":
        res += "<li style='color:yellow'>";
        break;
      case "free":
        res += "<li style='color:green'>";
        break;
    }
    res += `${todoList[index]}</li>`;
  }
  console.log(res);
  return res;
}; //<li>wash</li><li>clean</li><li>kill</li>

// const createList = () => {
//   var res = "";
//   //todoList.forEach((item) => (res += `<li>${item}</li>`));
//   todoList.map((singleItem) => (res += `<li>${singleItem}</li>`));
//   return res;
// };

const clearText = () => {
  document.getElementById("work").value = "";
};

/*
function addNumbers(num1,num2){
    return num1+num2;
}

const addNumbers = (num1,num2)=>{
    return num1+num2;
}
*/
