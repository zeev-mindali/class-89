import Person from "./cls/Person";

console.log("Hello World !!!!");

// let person = {
//   name: "zeev",
//   age: 48,
//   isMarried: true,
//   city: "Qiryat yam",
// };

// let person2 = {
//   name: "zeev",
//   age: 48,
//   isMarried: true,
//   kids: 1,
// };

// console.log(person);
// console.log(person2);

let zeev = new Person("zeev", 48, true, "Qiryat Yam", "123456");
let adam = new Person("adam", 31, true, "ram gan", "1234");
let alon = new Person("aln", 18, false, "natanya", "54321");

// console.log(zeev);

//the system is not secured :(

//we can not use the field password since it's private
//zeev.password = "hila";

// if (zeev.checkPassword("zeev", "123456")) {
//   console.log("hello my master");
// } else {
//   console.log("Why who are you?");
// }

console.log(zeev.getName());
console.log(adam.getName());
console.log(alon.getName());

alon.setName("alon");
zeev.setName("Zeevik the fox");
console.log(alon.getName());
console.log(zeev.getName());
