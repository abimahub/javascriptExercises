//** step by step creating a blackjack game **

// in scoring, Ace can be 11 or 1, the player decides, and J,Q,K are all worth 10.
// this is a llittle complex for this attempt, so here it is simplified:
// Ace=11, J,Q,K =10.

// // 1. Create two variables, firstCard and secondCard. 
// // Set their values to a random number between 2-11
// // 2. Create a variable, sum, and set it to the sum of the two cards
// let firstCard = 3
// let secondCard = 11
// let sum = firstCard + secondCard
// console.log(sum)

// // to assign a random number - use math.random() and math.floor:
// // Math.floor(Math.random() * 12) returns a number between 0 and 11, inclusive
// // Math.floor(Math.random() * 12) + 1 returns a number between 1 and 11, inclusive
// let firstRdmCard = Math.floor(Math.random() * 12) + 1;
// let secondRdmCard = Math.floor(Math.random() * 12) + 1;
// let sumRdm = firstRdmCard +secondRdmCard
// console.log(firstRdmCard + " " + secondRdmCard + " " + sumRdm)

//the best solution is to randomly generate the numbers using a function:
//getRndInteger(min, max) {return Math.floor(Math.random() * (max - min + 1) ) + min;}
// where min and max are described when called; for example using an onclick on a button element:
// <button onclick="document.getElementById('demo').innerHTML = getRndInteger(1,12)">Random Number</button>
// here, min is 1 and max is 12, meaning the function produces numbers between 1 and 12 inclusive.

// use a boolean variable hasBlackJack to save whether you got black jack or not
// use another boolean isAlive to determine whether a player can still play or is out of the game.
//console.log("hasBlackJack " + hasBlackJack)
//console.log("isAlive " + isAlive)
// Declare a variable called message and assign its value to an empty string.
// Reassign the message variable to the string we're logging out, then log it using console.log(message)
// Next, put the isAlive blocks into a function which is initiated when the user clicks the deal button.
//Finally, make draw reiterate until isAlive=false.
// achieved by refactoring to make deal() a separate function to startGame(), and also separate to getRdmInteger()
// then using the html id to call functions and display messages.

let card1 = 0
let card2 = 0
let cards = [] //adding an array to make handling the cards easier
let n = 0  // used in randomising function
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let cardsEl = document.getElementById("cards-el")
let userNameEl = document.getElementById("username-el")

function getRndInteger(min, max) { //randomising function for card values
     n = Math.floor(Math.random() * (max - min + 1) ) + min; 
     console.log("initial n value: " + n);
// // Ace=11, J,Q,K =10. So we need some function to check the number returned and change if needed.
// if (n > 10) {
//     return 10
//  } else if (n === 1) {
//     return 11
//  } else {
//     return n;
//  } 
 }  //**refactor this whole section

function deal() {
// function working out whether the user is bust or can draw another card 
if (sum <= 20) {
    message = "Do you want to draw another card?"
    //console.log("Do you want to draw another card?")
} else if (sum === 21) {
   message = "Woohoo! Blackjack!"
    // console.log("Woohoo! Blackjack!")
    hasBlackJack = true
} else {
    message = "oh no, you lose!"
    //console.log("Oh no, you lose!")
    isAlive = false
}
// sends the contents of message variable to the screen
document.getElementById("message-el").textContent = message;
console.log("End of deal: is Alive " + isAlive + " " + "has BlackJack " + hasBlackJack)
} //end of deal function


function startGame() { //displays initial cards and total on screen
    
    getRndInteger(1,13) //calls randomising function 
    card1 = n   // actually, on line 36 you can let card1 = getRndInteger()
    cards.push(n)
    getRndInteger(1,11)
    card2 = n //similarly on line 37 you can let card2 = getRndInteger() also.
    cards.push(n)
    //console.log(card1 + " " + card2) // should log out new random values
    console.log(cards)
    //first way of showing the cards relied on just showing two cards
    // //document.getElementById("cards-el").textContent += card1 + " " + card2; //prints cards to screen
    // document.getElementById("cards-el").textContent = "Cards: " + cards[0] + " " + cards[1] // using array to render out all cards
    //second attempt uses iteration of an array to print all items in the array
    //having added in a global variable for cardsEl
    cardsEl.textContent = "Cards: " 
           for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " "
           }
    sum = card1 + card2
    document.getElementById("sum-el").textContent += sum; //prints sum to screen
    //or could use eg let sumEL = document.querySelector("#sum-el") alongwith sumEL.textContent = "Total: " + sum
    deal() //checks for validity for next move
    }


function draw() { // for drawing additional cards
if ((isAlive === false)||(hasBlackJack === true)) {
    message = "sorry, game over." 
    //this displays if you are already bust and try to draw a card or have blackjack and try to draw a card
    document.getElementById("message-el").textContent = message;
}
else {
    getRndInteger(1,13)
    document.getElementById("cards-el").textContent += " " + n;
    cards.push(n)
    console.log(cards)
 sum += n;
 document.getElementById("sum-el").textContent = "Your Total: " + sum;
 console.log("new total " + sum)
 // adding-in new check for  whether the user is bust or can draw another card 
 deal()
}
}

// ADDING IN USER NAME AND CHIPS TOTAL DATA using an object
let user = {
    name: "Abi",
    chips: 145,
    sayHello: function() { // how to create a method or function within an object
        console.log("Greetings!")
        userNameEl.textContent = "Greetings " + user.name;
    }
}
let userEl = document.getElementById("user-el")
userEl.textContent = user.name + ": £" + user.chips
user.sayHello() //calls the method - the function within the object user