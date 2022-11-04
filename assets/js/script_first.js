document.getElementById("bttn-card").style.visibility = "hidden";

let player = {
    name: "Shemmy",
    credit: 3
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.innerHTML = player.name + " Credit: " + player.credit;

function startGame() {
        if (sum === 0) {
        isAlive = true;
        hasBlackjack = false
        let card1 = getRandomCard();
        let card2 = getRandomCard();
        cards = [card1, card2];
        sum = card1 + card2;

        game();

        document.getElementById("bttn-start").style.visibility = "hidden";
        document.getElementById("bttn-card").style.visibility = "visible";
        document.getElementById("bttn-save").style.visibility = "visible";
    };
};

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

function getRandomCard() {    
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