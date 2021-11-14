const a = 5;
const b = 2;
let myName = "DK"; 

console.log(a * b);
console.log(a + b);
console.log(a / b);
console.log("hello " + myName)

myName = "Maritza";
console.log("hello " + myName)



const live = null;
let something; 
console.log(something, live)



const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined];
console.log(daysOfWeek[0]);
daysOfWeek.push("sun");
console.log(daysOfWeek);


function sayHello(name){
    console.log("Hello! my name is " + name);
}
sayHello("dakyeom");

const calcualator = {
    add: function(a, b) {
        return a + b ;
    },
    minus: function(a, b)  { 
        return a - b ;
    },
    multiply: function(a, b)  { 
        return a * b ;
    },
    square: function(a, b)  { 
        return a ** b ;
    },
    divide: function(a, b)  {
        return a / b ;
    },
};
const plusResult = calcualator.add(1, 2);


//const age = prompt("How old are you?");

//"15" => 15
const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));

if(isNaN(age)){
    console.log("Please write number");
} else {
    console.log("Thanks.")
}





