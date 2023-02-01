import Person from "./person";

// let ran = new Person();
// ran.age=23;
// ran.city="Givat Shmuel";
// ran.name="Ran";
// ran.smart=true;

// let nadav=new Person();
// nadav.age=26;
// nadav.name="Nadav";
// nadav.city="TLV";
// nadav.smart=true;

let ran = new Person("ran",23,undefined,true);
let nadav = new Person("nadav",26,"TLV");

console.log(ran,nadav);
/*
let maya = {
    age:19,
    gender:"female",
    city: "Holon",
    smart:true,
}

let hila = {
    age: 23,
    gender: "female",
    city: "Rishon Le Tzion",
    smart:true
}

let netanel = {
    iq:123,
    tel: "050-111",
    song: "One",
    car:true,
}


let myTime = {
    hour:45,
    minutes:88
}
console.log(maya,hila,netanel);



*/