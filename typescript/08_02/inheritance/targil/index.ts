import Person from "./cls/Person";
import Pilot from "./cls/Pilot";

console.log("targil in inheritance");

//we can not make instances of abstract classes
//let zeev = new Person("zeev","mindali");


let avi = new Pilot("Avraham","Mindali",4,"5437834");

console.log(avi.print());