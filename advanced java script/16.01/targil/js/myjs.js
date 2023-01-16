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


//add a function to Number with prototype....
Number.prototype.makeComma = function () {
    //45678=>45,678
    //insert the number into temp variable
    let temp = this;
    //make the result variable empty and from string type
    let result = "";
    //continue as long temp is more then 0
    while (temp>0){
        //get last 3 digits and add comma (,) if result is not empty
        result = temp % 1000 + (result.length>1?",":"")+ result;
        //take out the 3 numbers that we used
        temp = Number.parseInt(temp/1000); //45678/1000=45.678=>45
    }
    //return result.substring(0,result.length-1);

    //return the result.
    return result;
}

let myNumber = 1234567890;
console.log(myNumber.makeComma())
