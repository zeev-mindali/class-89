var arr = [];

//normal for
// for (let i=0;i<10;i++){
//     arr.push(i);
// }


//for of
let names = ["zeev","amital","justin","alon","nadav","snapir"];
// for (let i of names){
//     arr.push(i);
// }
names.map(item=>arr.push(item));
console.log(arr);
arr.map(item=>console.log(item));