
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    if (h1.className === "active") { 
        h1.className = "";
    }else{
        h1.className = "active";
    }
    //is getter & setter. js >>> html >>> css
}

h1.addEventListener("click", handleTitleClick);






/*
const hellos = document.getElementsByClassName("hello");
console.log(hellos)

const title1 = document.getElementsByTagName("h1");
console.log(title1)

//! CSS selector //only first one. querySelector; //.class // #id
const title2 = document.querySelector(".hello h1"); 
console.log(title2);

const h1 = document.querySelector("div.hello:first-child h1");
console.log(h1);

console.dir(h1);
// "on --"" is event but it's  Javascript object.

h1.innerText = "Hello";
h1.style.color = "blue";


//Listen for Events
function handleTitleClick() {
    console.log("title was clicked");
    h1.style.color = "red"
}

function handleMouseEnter() {
    console.log("mouse is here");
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() { 
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() { 
    alert("Copy!")
}

function handleWindowOffline() {
    alert("NO WIFI:(")
}

function handleWindowOnline() { 
    alert("WIFI ALL GOOOOOD:)")
}

h1.onclick = handleTitleClick; //it can be 
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/



/*
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
} else if (age < 10){
    console.log("Too young.");
} else if (age > 80) {
    console.log("Too old.");
} else {
    console.log("Pass")
}

*/


