// ** reading a new value for a variable
// document.getElementById("count-el").innerText = 5

// ** manipulating variables
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// ** more manipulating variables
// let myAge = 19
// let humanDogRatio = 7

// let dogYears = myAge * humanDogRatio
// console.log(dogYears)

// ** incrementing variable values
// let count = 5
// count = count + 2
// console.log(count)

// ** challenge
// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// ** concatenating strings and variables
// let username = "abi"
// let message = "you have three notifications, " // remember that exactly what is quoted is returned, so add in spaces as required.
// let messageToUser = message + username
// console.log(messageToUser)

// ** concatenation note: strings vs numbers = strings, and strings are NOT processed mathematically e.g.:
// console.log(7 + 2)        // 9
// console.log("14" + "7")   // 147
// console.log(9 + "14")     // 914
// console.log("100" + 120)  // 100120

// ** Trying functions using a car race example
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

//  let countEl = document.getElementById("count-el")
// let lapsCompleted = 0
// function totalLaps() {
//     lapsCompleted = lapsCompleted + 1
//     countEl.innerText = lapsCompleted
// }
// totalLaps()
// totalLaps()
// totalLaps()
// console.log(lapsCompleted)

// // ** PASSENGER COUNTER FUNCTIONS
// ** NB can use this way for innertext, or above way which declares a variable and ties it to the html id count-el, then overwrites value using innertext **
//initialize count as 0
// onClick to detect when button clicked
// change variable when button clicked
// change the count-el in the html to the new count

let saveEl = document.getElementById("saveEl");
let count = 0;
function increment() {
  console.log("The increment button was clicked.");
  count += 1; // this is the same as: count = count + 1
  document.getElementById("count-el").innerText = count;
  console.log("count-el = " + count);
}

function decrement() {
  console.log("The decrement button was clicked.");
  count -= 1; // this is the same as: count = count - 1
  document.getElementById("count-el").innerText = count;
  console.log("count-el = " + count);
}
//set the count back to zero once save is pressed
function save() {
  console.log(count);
  let saveStr = count + ", ";
  saveEl.textContent += saveStr; //textContent understands space character, innerText does not.
  count = 0;
  document.getElementById("count-el").textContent = count; //again, textContent preserves the space after "previous entries: " in the html.
}

// ** Greeting
let welcomeEl = document.getElementById("welcome");
let greeting1 = "Hi ";
let greeting2 = ", happy counting!";
let nameU = "Abi";
let salutation = greeting1 + nameU + greeting2;
welcomeEl.innerText = salutation;
console.log(salutation);
