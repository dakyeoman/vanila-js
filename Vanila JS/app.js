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




/* IF Drink 

//Conditionals: if & Else//
//prompt ask to user.//
const playerAge = prompt("How old are you?"); 
//JS waiting for us. so we don't use it anymore//
//parseInt: string -> number, NaN: not a number//
console.log(typeof "15", typeof parseInt("15"), parseInt("strings"));

const userAge = parseInt(prompt("How old?"));
//console.log(isNaN(playerAge)); isNaN returns boolean//



if(isNaN(userAge) || userAge < 0){ 
    //condition should be boolean//
    // && : true & true//
    // || : or = one of them true > true //
    console.log("Write positive numbers!!!");
} else if(userAge < 18) {
    console.log("You are too young");
} else if(userAge >= 18 && userAge <= 50) { 
    console.log("You can drink!");
} else if(userAge > 50 && age <=80) {
    console.log("Seriously?");
} eslse {
    console.log("Stop drinking!!!")
}

*/




/*#3. JS reading HTML, already connected w/ HTML
const title = document.getElementById("title");
//getElementById will find element on HTML by ID//
//we can change & get things in HTML by JS//

title.innerText ="Got you!";
console.log(title.id);
console.log(title.className);

/*

const hellos = document.getElementsByClassName("hello");
console.log(hellos);  
-> hellos = array which has many <h1> */


/*
#title =/= title object, title = array so It's not what i want

const title = document.getElementsByTagName("h1");
console.log(title); 
*/

// #querySelector search for element using CSS notation - can get h1 in the class "hello" //
const title = document.querySelector(".hello h1"); //Need "" inside ()//
//it can be ".hello h1:first-child"
console.log(title); 
title.innerText = "HEEEEEEEEEEY"
//querySelector returns only 1 element. eventhough there is many selector//


// querySelectorAll returns all element that match, but it gives me array //
const titleAll = document.querySelectorAll(".hello h1"); 
console.log(titleAll); 

