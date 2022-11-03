

// let card1 = getRandomCard();
// let card2 = getRandomCard();
// let card3 = getRandomCard();
// let card4 = getRandomCard();
// let card5 = getRandomCard();

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {

    // let cardDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11];
    // let cardColors = ["Heart", "Spade", "Diamond", "Club"];
    // let cards = [];

    let cardValue = Math.floor( Math.random()*13 ) + 1
    
    if (cardValue === 1) {
        cardValue = 11
    } else if (cardValue > 10 ) {
        cardValue = 10
    } else {
        return cardValue
    }
    return cardValue
};

function startGame() {
    isAlive = true
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1, card2]
    sum = card1 + card2
    game();
}

function game() {

    cardsEl.innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + " "

    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "Congratulations!!! You've got a Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You loose!"
        isAlive = false;
    }
    
    messageEl.innerHTML = message;
};
}

function newCard() {
    
    if (isAlive === true && hasBlackJack === false) { 
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        game();
    };
}
