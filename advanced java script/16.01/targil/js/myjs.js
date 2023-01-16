/*

********
* zeev *
********

*/

String.prototype.makeStar = function(){
    let starLength = this.length+4;
    let star = "";
    for (let counter=0;counter<starLength;counter++){
        star += "*";
    }
    return `${star}\n* ${this} *\n${star}\n`;
}

let myName = "zeev mindali";
//console.log(myName.makeStar());
let students = ["Ben Biton","Daniel gapso","Lior Zadok","Adam Eshete"];
students.map(item=>console.log((item.makeStar())));
console.log("מבצע וודקה + 10 רדבול".makeStar());

// 10000000 => 10,000,000
// 1234567890 => 1,234,567,890
// 5 => 5
// 10000 => 10,000

