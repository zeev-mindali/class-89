"use strict";

// userName="zeev";
// console.log(userName);
// userName=12345
// console.log(userName);

//IIFE -> Immediately Invoked Function Expression

const main = function(){
    for (let i=0;i<5;i++){
        console.log(i);
    }
}();


const sayHello = function(name){
    console.log(name);
}("zeev");


