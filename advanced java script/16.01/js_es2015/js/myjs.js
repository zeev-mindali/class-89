function getDynamicKey(){
    return "Matan the king of the world";
}

function getToken(){
    return "beny beny yeled raa";
}
function getAdamKey(){
    return "ADAM";
}
function getZeevKey(){
    return "zeevik";
}
let sameVal = "Arik";
let obj = {
    //Prototypes can be set this way
    __proto__: Object,

    //key value, write short code sameVal: samVal
    sameVal,
    funcNum(){
        return 10;
    },

    //Dynamic values for keys
    [getDynamicKey()]: 'and arik too.',
    [getAdamKey()]: "adam",
    [getToken()]: "token approved...",
    [getZeevKey()]: "this is me..."
}

//console.log("obj.__proto__",obj.__proto__);
console.log("obj.sameVal",obj.sameVal);
console.log("obj.funcNum()",obj.funcNum());
console.log("obj[getDynamicKey()]",obj[getDynamicKey()]);
console.log("bla bla bla",obj[getDynamicKey()]);
console.log('obj["ADAM"]',obj["ADAM"]);
console.log(obj[getToken()]);
console.log(obj[getZeevKey()]);
console.log(obj["Matan the king"]);