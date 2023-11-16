// CREATING A BLACK 5 JAVASCRIPT GAME

//          ***RULES of Black 5***
// 3-6 players is best - needs consideration for a game app.
// single deck of cards in use
// 5 cards each to start (7 if fewer players)
// deck is shuffled and laid in middle of table, turn over top card and lay next to deck - this is base card
// subsequent cards played are laid over base card and become base.
// pick who goes first, and which direction of play around the players
//
// each player - MUST play if can, if cannot play must pick up a card
//    able to play = player has card same suit as base card
//                   player has card same number/face as base card
//                   player has any ace
//
// Running combos - should play these if can:
//        place a card same suit or number as base,
//        then place another card same number but different suit OR same suit plus or minus one number/value as previous
//        repeat until options exhausted.
//
//        Examples - D = diamond, S = spade, H = heart, C = club
//        Base = 3S
//        Combo: 6S, 7S, 7D, 6D, 6C, 5C
//         * Unlawful combo: 6S, 7S, *3S*, 3H, 4H - cards must run up or down sequentially, cannot skip numbers.
//
// Special Cards - these cards have certain actions
//      Ace - changes suit - player calls new suit (can be used in running combo)
//      2 - next player MUST play a 2 or pick up 2 cards (if two 2's played, four cards are picked up, etc)
//      Black 5 - Next player MUST play a 5 or pick up 5 cards (again, multiple cards played = multiple cards picked-up)
//      Red 5 - cancels out a Black 5 (no card pick up)
//      8 - next player MUST play an 8 or miss a turn
//      Jack - changes the direction of play around the table
//      Queen - next player misses a turn, no matter what
//      King - player gets another turn (example, base is QD, player plays KD, then 3S)
//
// Game is won when one player has no cards left, but play may continue to determine eg second and third places.
//

// First; set number of players, then deal cards to all players by random generation.
//
//
//
//
//let noPlayers = 4; // for the moment, this is fixed, later on this can be a user-input value
//set up a function to randomly generate cards for each player
let players = []; // an array to hold player information
let player1 = []; // arrays for holding players cards
let player2 = [];
let player3 = [];
let player4 = [];
let player5 = [];
let player6 = [];
let n = 0; // for randomiser
let hand = 0; //for passing hand cards out of randomCard function

// deck builder - generates 52 cards
function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}
//to select random cards from the 52
function randomCard(cards) {
  for (let i = 0; i <7; i++) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  let entity;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");
  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-value-suit top">' +
    cardValue +
    entity +
    "</span>" +
    '<span class="card-suit">' +
    entity +
    "</span>" +
    '<span class="card-value-suit bot">' +
    cardValue +
    entity +
    "</span>";
  document.body.appendChild(card);
  player1.push(cardValue + cardSuit) // push the values into the array each iteration
  console.log(cardValue + cardSuit)
  } 
}

function handCards() {
  //console.log("hand cards: " + player1[])
  for (let i=0; i < player1.length; i++) { // i++ is the same as i +=1
          console.log(player1[i])
     }
}
const cards = deckBuilder();
randomCard(cards);
handCards(cards);
//console.log(cards);

// //randomising function for card values - starting with player1 to begin with
// function getRndInteger(min, max) {
//   n = Math.floor(Math.random() * (max - min + 1)) + min;
// }
// //draw 5 cards per player
// for (var i = 0; i < 5; i++) {
//   getRndInteger(1, 13); //calls randomising function
//   player1.push(n);
//   document.getElementById("p1cards-el").textContent = player1; //[0] + " " + player1[4] // using array to render out all cards
// }
// //console.log(player1);
// function startGame() {
//   //document.getElementById("cards-el").textContent += card1 + " " + card2; //prints cards to screen
//   //or could use eg let sumEL = document.querySelector("#sum-el") alongwith sumEL.textContent = "Total: " + sum
//   // deal() //checks for validity for next move
// }
