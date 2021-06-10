const a = 5;
const b = 2;
let myName = "nico";


console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log("hello " + myName);

myName = "dada";
console.log("Actually I'm " + myName);

const amICute = null; //means "there is nothing"//
let something; //it exist, but there is nothing inside of it("something")//
console.log(something, amICute); //-> undefine, null//



//This is "array"//
const player1 = ["me", 1212, false, "little bit"]; 
//put data whatever you want//
//we can access to items in array//
console.log(player1[0]);
player1.push("magician"); //add item to the list//
console.log(player1);


//make object "player", can add&update something//
const player = {
    name: "nico", 
    points: "1329",
    cute: true, //boolean = only true or false//
};

//how to get something of object//
console.log(player.name);
console.log(player["points"]);


player.cute = false;
console.log(player.cute)

//update variable "lv"//
player.lv = 100;
player.lv = player.lv + 23;
console.log(player);

//function - can use over and over agian & how to recive argument//
function sayHello(nameOfPerson, age){ //nameOfPerson, age are "placeholders"//
    console.log("Hello! my name is " + nameOfPerson + " and I'm " + age + " years old");
}
sayHello("nico", "10");
sayHello("daaa", "23");
sayHello("lynn", "20");

//function inside object//
const playerNew = {
    name: "nico", 
    sayHello: function(otherPersonsName){
        console.log("halo " + otherPersonsName + "!");
    }
}
console.log(playerNew.name);
playerNew.sayHello("dada");

//console. is object //

//function calculator//
const calculator = {
    plus: function (a, b){
        return a + b;
    },
    minus: function (a, b){
        return a - b;
    },
    divide: function (a, b){
        return a / b;
    },
    power: function (a, b){
        return a ** b;
    },
    times: function (a, b){
        return a * b; //return finishes function//
    }
}

const plusResult = calculator.plus(3, 4); //actual value of plus is "undefined"//
console.log(plusResult);

//I want result of function in the "CODE"//
const age = 22;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const plusResult2 = calculator.plus(2, 3); //5//
const minusResult = calculator.minus(plusResult2, 10); //-5//
const timesResult = calculator.times(10, minusResult); //-50//
const divideResult = calculator.divide(timesResult, plusResult); //
const powerResult = calculator.power(divideResult, minusResult)
//console.log - shows result in console, returning nothing//
//return - can get the value on the code, out of the function//


//Conditionals: if & Else//
//prompt ask to user.//
const playerAge = prompt("How old are you?"); //JS waiting for us. so we don't use it anymore//
//parseInt: string -> number, NaN: not a number//
console.log(typeof "15", typeof parseInt("15"), parseInt("strings"));

const userAge = parseInt(prompt("How old?"));
//console.log(isNaN(playerAge)); isNaN returns boolean//

if(isNaN(userAge) || userAge < 0){ //condition should be boolean//
    console.log("Write positive numbers!!!");
} else if(userAge < 18) {
    console.log("You are too young");
} else if(userAge >= 18 && userAge <= 50) { 
    // && : true & true//
    // || : or = one of them true > true //
    console.log("You can drink!");
} else if(userAge > 50 && age <=80) {
    console.log("Seriously?");
} else {
    console.log("Stop drinking!!!")
}