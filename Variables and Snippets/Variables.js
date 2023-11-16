// // create two variables, firstName and lastName
// // concatenate into a variable, fullName
// // log fullName to console

// let firstName = "Darth"
// let lastName = "Vader"
// let fullName = firstName + " " + lastName
// console.log(fullName)

// //create a function that logs out "Hi there, Linda!" when called
// // then have it replace the "hello" text in the paragraph with id="greeting"
// let greeting1 = document.getElementById("greeting");
// let colleague = "Linda"
// let salutation = "Hi there"
// function greeting() {
//   console.log(salutation + ", " + colleague + "!")
//   greeting1.textContent = salutation + ", " + colleague + "!"
// }
// greeting()

// // create two functions, add3Points() and remove1Point()
// // have them add and remove points from the myPoints variable
// // call add3Points() and remove1Point() in order that console.log(myPoints) returns 10
// let myPoints = 3
// function add3Points () {
//     myPoints += 3
// }
// function remove1Point () {
//     myPoints += -1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)

// // predict what each line will return (manipulating strings and integers)
// console.log("2" + 2) // 22
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("My points: " + 5 + 9) // My points: 59
// console.log(2 + 2) // 4
// console.log("11" + "14") // 1114

// // //When the user clicks the purchase button, render out
// // // "something went wrong, please try again" in the paragraph
// // // which has the id="error".
// // function errorMsg() {
// //    let errorTxt = "Something went wrong, please try again."
// //     document.getElementById("error").innerHTML = errorTxt
// // }

// //or:
// let error = document.getElementById("error");
// function errorMsg() {
//     error.textContent = "Something went wrong, please try again."
// }

// // Manipulating Numbers (calculator)
// // Create four functions: add(), subtract(), divide(), multiply()
// // Call the correct function when the user clicks on one of the buttons
// // Perform the given calculation using num1 and num2
// // Render the result of the calculation in the paragraph with id="sum-el"
// // E.g. if the user clicks on the "Plus" button, you should render
// // "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
// // added a clear button which sets the text of the paragraph with id="sum-el" to "Total - "
// //added a help button which doesn't do anything but logs that it has been clicked.
// // NB: "clear" cannot be used for the onclick/name of the function, so "clearsum" has been used.

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// function add() {
//     console.log("add button clicked.")
//   let result = num1 + num2;
//   document.getElementById("sum-el").innerText = "Total= " + result;
// }
// function subtract() {
//     console.log("subtract button clicked.")
//   let result = num1 - num2;
//   document.getElementById("sum-el").innerText = "Total= " + result;
// }
// function divide() {
//     console.log("divide button clicked.")
//   let result = num1 / num2;
//   document.getElementById("sum-el").innerText = "Total= " + result;
// }
// function multiply() {
//     console.log("multiply button clicked.")
//   let result = num1 * num2;
//   document.getElementById("sum-el").innerText = "Total= " + result;
// }
// function clearsum() {
//     console.log("Clear button clicked.")
//     document.getElementById("sum-el").innerText = "Total= ";
// }
// function help() {
//     console.log("help button clicked")
// }

// **** Additional functions and variables useful for making the blackjack game.

// // Check if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases
// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"
// let age = 22
// // if (age < 21 ){
// //     console.log("You can not enter the club!")
// // } else {
// //     console.log("Welcome!")
// // }
// // using 'less than or equal to' type operators
// if (age >= 21 ){
//     console.log("Welcome!")
// } else {
//     console.log("You can not enter the club!")
// }

// // Check if the person is elegible for a birthday card from the King! (100)
// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"
// // NB; === is a strict comparison; == will read a matching string and number as the same, === will not. 
// // for example if we change just the age variable to: let age = "100", and then in the function used: if (age == 100) etc
// // they would both be taken as 100 and matching. The === in the current function would not allow that match.
// // you should take care you are comparing similar datatypes in your code, so you don't break anything.
// let age = 100
// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100)  {
//     console.log("Here is your birthday card from the King!")
// } else if (age > 100) {
//     console.log("Not elegible, you have already gotten one")
// }

// // Checking sum of boolean variables
// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

// // create a rollDice() function, returning random number 1-6
// function rollDice() { //randomising function for card values
//        return Math.floor(Math.random() * 6) + 1; 
//      }
//      rollDice()
//      console.log(rollDice())

// //trying out randomising function
// let n = 0
// function getRndInteger(min, max) { //randomising function for card values
//     n = Math.floor(Math.random() * (max - min + 1) ) + min; 
//     console.log(" " + n)
//  }
//  //getRndInteger(2,11) //calls randomising function 


// Arrays - ordered lists of items, 0 indexed (starts at 0 not 1)
//example of linkedIn items:
// let featuredPosts = [
//     "Check out my Netflix clone", 
//     "Here's the code for my project", 
//     "I relaunched my portfolio"
// ]
//  // Create an array that lists your i.e. experience, education, licenses, skills or similar
// // The items of the array should be strings
// let myQuals = [
//     "BSc (Hons) Web Development",
//     "HNC Management",
//     "3 Higher Grades",
//     "8 Standard Grades"
// ]
// console.log( featuredPosts[0]) // Check out my Netflix clone
// console.log(myQuals[2]) //3 Higher Grades - because 0,1,2 is how array index works

// //Using arrays with the PushManager()method
// let abi = ["Abi Mowbray Allton", 47, true]

// abi.push(23)
// console.log(abi) //Array(4) [ "Abi Mowbray Allton", 47, true, 23 ]

// Push the newMessage to the messages array, and then log out the array
// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages) // Array(4) [ "Hey, how's it going?", "I'm great, thank you! How about you?", "All good. Been working on my portfolio lately.", "Same here!" ]
// messages.pop()
// console.log(messages) //Array(3) [ "Hey, how's it going?", "I'm great, thank you! How about you?", "All good. Been working on my portfolio lately." ]
// messages.shift()
// console.log(messages) //Array [ "I'm great, thank you! How about you?", "All good. Been working on my portfolio lately." ]
// //pop removes the last item from an array, shift removes the first item, other methods exist to remove other items.

// ***how to iterate, increment, decrement and count in javascript***
// Count to ten!
// We need to specify...
// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

// //    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 2 )  { 
// //This counts every other number (step) between 1 and 10 inclusive (<11)
//     console.log(count)
// }
// //    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 3 )  { 
//     //This counts every third (step) between 1 and 10 inclusive (<11)
//     // 1, 4, 7, 10
//         console.log(count)
//     }
//     //    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count += 1 )  { 
//     //This counts every number (step) between 10 and 20 inclusive (<21)
//     // 
//         console.log(count)
//     }

// Iterate a for loop
// //example:
// for (let i=0; i < 6; i += 1) {
//     console.log(i)
// }
//Create a for loop that counts from 10 to 100 in steps of 10
// // Use console.log to log out the numbers
// for (let i =10; i < 101; i += 10) {
//     console.log(i)
// }

// let messages = [
//         "Hey, how's it going?",        
//         "I'm great, thank you! How about you?",
//         "All good. Been working on my portfolio lately.",
//         "Same here!",
//         "Great to hear"
//     ]
// // DRY - Don't Repeat Yourself
// // eg don't repeat code by console.log each item in an array, like this:
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])
// for (let i=0; i<5; i +=1) {
//     console.log(messages[i]) //read the items in the array individually
// }
// But if you add or subtract items from the array, this function will not handle that dynamically.
//To dynamically change the finish number, do this:
// for (let i=0; i < messages.length; i +=1) {
//     console.log(messages[i]) //read the items in the array individually
// }
// messages.push("happy halloween!")
// for (let i=0; i < messages.length; i +=1) {
//     console.log(messages[i]) //read the items in the array individually
// }
// messages.shift()
// for (let i=0; i < messages.length; i +=1) {
//     console.log(messages[i]) //read the items in the array individually
// } // this now logs out "I'm great, thank you! How about you?" as the first message, because it now has index 0 in the array.

// //using an example with a cards array
// let cards = [7, 3, 9]
// for (let i=0; i < cards.length; i++) { // i++ is the same as i +=1
//          console.log(cards[i])
// }

// // render out the items in an array into an html element
// let sentence = ["Hello", "my", "name", "is", "Abi"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

// //  Playing with functions and iterations, then randomising.
// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)
// // Write a function that returns the total race time
// // Call/invoke the function and store the returned value in a new variable
// // Finally, log the variable out
// function totalRaceTime() {
//     return (player1Time + player2Time)
// }
// let totalTime = totalRaceTime()
// console.log(totalTime)

// *** USING LOGICAL CONDITIONS IN FUNCTIONS
// ****  && is AND, || is OR (either or, so only one parameter needs to meet criteria), 

// // student certificate: is the course certificated, and if so, is the student eligible?
// let hasCompletedCourse = false
// let givesCertificate = true
// console.log( hasCompletedCourse + " " + givesCertificate)
// if (hasCompletedCourse === true && givesCertificate === true) { 
// // the === true are not req'd, if ((hasCompletedCourse && givesCertificate) is checking for true.
//     // if (givesCertificate === true) {
//         generateCertificate()
//     // }
// }
// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// //expanding the course completed ides; here's a function which could be used for a student
// let hasSolvedChallenge = false
// let hasHintsLeft = false
// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution()
// }
// function showSolution(){   
//     console.log("Showing the solution....")
// }

// // Create two boolean variables, likesDocumentaries and likesStartups
// // Use an OR statement (||) to call recommendMovie() if either of those variables are true
// let likesDocumentaries = true
// let likesStartups = false
// if (likesDocumentaries || likesStartups) { // || checks if either variable is true
//     recommendMovie()
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// OBJECTS - store data in-depth, composite/complex datatype
// key-value pairs
// //Example:
// let course = { // declare the object
//     title: "Learn CSS Grid for free", // define the items contained in the oblect
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.length) //will log out 63
// console.log(course.title) // will log out Learn CSS Grid for free
// //dot notation return the one item type
// // array notation can return multiple item types from the object.
// console.log( course["tags"] ) // will log out Array [ "html", "css" ]

// // AirBNB-style example:
// //Create an object that represents an airbnb castle listing.
// //It should contain at least one boolean, one string, one number, and one array
// //Log out at least two of the keys using the dot notation
// let castle ={
//     name: "castellation Castle",
//     price: 150,
//     sharedBuilding: false,
//     amenities: ["pool", "parking", "en-suite", "coffee maker", "tennis court", "spa", "breakfast"]
//     sayHello: function() { // how to create a method or function within an object
//     console.log("Greetings!")
//     }
// }
// console.log(castle.name)
// console.log(castle.sharedBuilding)
// console.log(castle["amenities"])
// castle.sayHello()  //calls the method within the object

// // Create a person object that contains three keys: name, age, and county.
// // Use yourself as an example to set the values for name, age, and country
// // Create a function, logData(), that uses the person object to create a
// // string in the following format: 
// // "Per is 35 years old and lives in Norway"
// // Call the logData() function to verify that it works
// let person = {
//     name: "Abi",
//     age: 47,
//     country: "Sccotland"
// }
// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }
// logData()

// // Example: determine ticket price by age using functions
// // less than 6 years old -> free
// // 6 to 17 years old     -> child discount
// // 18 to 26 years old    -> student discount
// // 27 to 66 years old    -> full price
// // over 66 years old     -> senior citizen discount
// // Create a conditional statement (if/else/else if) that logs out the discount
// // the passenger will get based upon the value of the age variable
// let age = 15
// function ageChecker() {
//     if ((age >= 27) && (age <= 66)) {
//         console.log("full price")
//     } else if (age >66) {
//         console.log("senior citizen")
//     } else if ((age >= 6) && (age <=17)) {
//         console.log("child discount")
//     } else if ((age >= 18) && (age <=26)) {
//         console.log("student discount")
//     } else {
//         console.log("free ticket")
//     }
// }
// ageChecker()
// // this can also be written:
// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")    
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// // Use a for loop to log the following to the console:
// // The 5 largest countries in the world:
// // - China
// // - India
// // - United States
// // - Indinesia
// // - Pakistan
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// // Fix the largeCountries array so that Tuvalu and Monaco are removed and
// // China and Pakistan are added back into their respective places
// // Use push() & pop() and their counterparts unshift() & shift()
// // Google how to use unshift() and shift()
// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// largeCountries.pop()
// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.push("Pakistan")
// console.log(largeCountries)

// // If it is Friday the 13th, log out this spooky face: 😱
// // Use the logical "AND operator" -> &&
// let dayOfMonth = 13
// let weekday = "Friday"
// if ((dayOfMonth === 13) &&(weekday === "Friday")) {
//     console.log("👻")
// }

// // Rock, Paper, Scissors
// // Create a function that returns a random item from the array
// let hands = ["rock", "paper", "scissors"]
// function rndAction() {
//     let n = Math.floor(Math.random() * 3);
//     return hands[n]
// }
// console.log(rndAction())
// console.log(rndAction())
// console.log(rndAction())
// console.log(rndAction())
// console.log(rndAction())
// console.log(rndAction())
// console.log(rndAction()) //logging just to get a sample of answers

// //Emoji Fighter!
// // Street Fighter emoji knockoff game
// // Challenge:
// // When the user clicks on the "Pick Fighters" button, pick two random 
// // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")
// fightButton.addEventListener("click", function() {
      
//     let n = Math.floor(Math.random() * fighters.length);
//     let x = Math.floor(Math.random() * fighters.length); 
//     let nEl = fighters[n];
//     let xEl = fighters[x]
//     stageEl.textContent = nEl + " vs " + xEl  
//     console.log(nEl + " vs " + xEl)    
// })

// // Emoji Fruit Sorter
// // Create a function that puts the apples onto the appleShelf
// // and the oranges onto the orangeShelf. Use a for loop,
// // a conditional statement, and the textContent property.
// let fruit = ["🥝", "🍊", "🥝", "🥝", "🍊"]
// let appleShelf = document.getElementById("appleShelf")
// let orangeShelf = document.getElementById("orangeShelf")
// function fruitSorter() {
//     for (let i = 0; i < fruit.length; i++) {
//        if (fruit[i] === "🥝"){
//         appleShelf.textcontent += "🥝";
//         console.log("🥝")
//        } else if  (fruit[i] === "🍊"){
//         orangeShelf.textContent += "🍊";
//         console.log("🍊")
//        }
//     }
// }
// fruitSorter()
//     //console.log("- " + fruit[i])

// ****USING CONST instead of LET
// If possible, use const. If not, use let.

// // Which variables below should be changed from let to const?
// // The customer wants to order some stuff. Here are the details:
// const basePrice = 520 //base price unlikely to change or be reassigned
// const discount = 120 //discount unlikely to change or be reassigned
// let shippingCost = 12 // likely to be changed, hence let
// let shippingTime = "5-12 days" //likely to be changed, hence let
// // Whoops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"
// // Calculating the full price
// const fullPrice = basePrice - discount + shippingCost //fullPrice unlikely to change or be reassigned
// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// // USING .innerHTML to add and manipulate HTML elements using the DOM.
// // // Use .innerHTML to render a Buy! button inside the div container
// let buyEl = document.getElementById("buy-El")
// buyEl.innerHTML = "<button onclick='buy()'>Buy!</button>"
// function buy() {
//     buyEl.innerHTML += "<p>Thank you for buying!</p>"
// }
// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"
// //  using += renders the new paragraph UNDER the button.

// USING TEMPLATE STRINGS / TEMPLATE LITERALS - simplifying html generation in the js
// Generating html in js using double- and single-quotes is fine, but unwieldy. 
//Template strings allow the string to be broken onto different lines using the "backtick" or
//the single backslant quote mark `(not apostrophe), along with dynamic variables ${var}

// // Refactor the below email string to use template strings
// const recipient = "James"
// // Refactor this:
// //const email = "Hey " + recipient + "! How is it going? Cheers Per"
// const email = `Hey ${recipient}! How is it going? Cheers Per`
// console.log(email)
//template strings can be broken onto multiple lines, and contain multiple ${var}, thus:
// if you lay the string out over several lines, it will be rendered in the browser over several lines
const recipient = "James"
const sender = "Per Harald Borgen"
// Break the email string into multiple lines
const email = `Hey ${recipient}! 
How is it going? 
Cheers
${sender}`
console.log(email) // this should log out on four lines
