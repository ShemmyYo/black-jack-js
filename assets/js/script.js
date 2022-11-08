// document.getElementById("bttn-card").style.visibility = "hidden";

let player = {
    name: "Shemmy",
    credit: 3
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isActive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); //unused variables
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.innerHTML = player.name + " Credit: " + player.credit;


let dealerSum = 0;
let playerSum = 0;

let cardsDeck;
let hidden;

var canHit = true;

window.onload = function() {
    createDeck();
    shuffleDeck();
    startGame();
};

function createDeck() {
    let colors = ["H", "C", "D", "S"];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    cardsDeck = [];

    for (let color = 0; color < 4; color++) {
        for (let rank = 0; rank < ranks.length; rank++) {
            cardsDeck.push(ranks[rank] + "-" + colors[color]);
        }
    }
    console.log(cardsDeck);
}

function shuffleDeck() {
    for (let i = 0; i < 52; i++) {
        let j = Math.floor(Math.random() * 52);
        let temp = cardsDeck[i];
        cardsDeck[i] = cardsDeck[j];
        cardsDeck[j] = temp;
        }
    console.log(cardsDeck);
    }

function restartGame() {
    cardsDeck = [];
    console.log(cardsDeck);
    playerSum = 0;
    console.log(playerSum);
    dealerSum = 0;
    console.log(dealerSum);

    let dealerCards = document.getElementById("dealer-cards");
    while (dealerCards.firstChild) {
        dealerCards.removeChild(dealerCards.firstChild);
        }
    console.log(dealerCards);
    let playerCards = document.getElementById("player-cards");
    while (playerCards.firstChild) {
        playerCards.removeChild(playerCards.firstChild);
        } 
        console.log(playerCards); 

    let cardImg = document.createElement("img");
    let card = cardsDeck.pop();
    document.getElementById("dealer-cards").append(cardImg);
    cardImg.src = "./assets/images/deck/back.png";

    canHit = true;
    createDeck();
    shuffleDeck();
    startGame();

}

function startGame() {
    hidden = cardsDeck.pop();
    dealerSum += getValue(hidden);
    console.log("hidden: " + hidden);
    // console.log(dealerSum);

    while (dealerSum < 17 ) {
        let cardImg = document.createElement("img");
        let card = cardsDeck.pop();
        cardImg.src = "./assets/images/deck/" + card + ".png";
        dealerSum += getValue(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log("D: " + dealerSum);

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = cardsDeck.pop();
        cardImg.src = "./assets/images/deck/" + card + ".png";
        playerSum += getValue(card);
        document.getElementById("player-cards").append(cardImg);
    }
    console.log("P: " + playerSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
}

function hit() {
    if (!canHit) {
        return;
    }
    let cardImg = document.createElement("img");
    let card = cardsDeck.pop();
    cardImg.src = "./assets/images/deck/" + card + ".png";
    playerSum += getValue(card);
    document.getElementById("player-cards").append(cardImg);

    if (playerSum <= 20) {
        message = "Do you want to draw another card?";
    } else if (playerSum === 21) {
        message = "Congratulations!!! You've got a Blackjack!";
        hasBlackJack = true;
        canHit = false;        
    } else {
        message = "";
        canHit = false;
        stay();
    }
    messageEl.innerHTML = message;
}

function stay() {
    canHit = false;
    document.getElementById("hidden").src = "./assets/images/deck/" + hidden + ".png";

    if (playerSum === 21) {
        message = "Congratulations!!! You've got a Blackjack!";
    } else if (playerSum > 21) {
        message = "You Lose!";
    } else if (dealerSum > 21) {
        message = "You Win!";
    } else if (playerSum == dealerSum) {
        message = "Tie!";
    } else if (playerSum > dealerSum) {
        message = "You Win Chicken!";
    } else if (playerSum < dealerSum){
        message = "You Lose Chicken!";
    }
    messageEl.innerHTML = message;
}

function getValue(card) {
    let data = card.split("-");
    let value = data[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        } 
        return 10;
    }
    return parseInt(value);
}










// function startGame2() {
//         if (sum === 0) {
//         isActive = true;
//         hasBlackJack = false;
//         let card1 = getRandomCard();
//         let card2 = getRandomCard();
//         cards = [card1, card2];
//         sum = card1 + card2;

//         game();

//         // document.getElementById("bttn-start").style.visibility = "hidden";
//         // document.getElementById("bttn-card").style.visibility = "visible";
//         // document.getElementById("bttn-save").style.visibility = "visible";
//     }
// }

// function game() {

//     cardsEl.innerHTML = "Cards: ";

//     for (let i = 0; i < cards.length; i++) {
//     cardsEl.innerHTML += cards[i] + " ";

//     if (sum <= 20) {
//         message = "Do you want to draw another card?";
//     } else if (sum === 21) {
//         message = "Congratulations!!! You've got a Blackjack!";
//         hasBlackJack = true;        
//     } else {
//         message = "You loose!";
//         isActive = false;
//     }    
//     messageEl.innerHTML = message;
//     }
// }

// function newCard() {
//     if (isActive === true && hasBlackJack === false) { 
//         let card = getRandomCard();
//         sum += card;
//         cards.push(card);
//         game();
//     }
// }

// function getRandomCard() {    
//     let cardValue = Math.floor( Math.random()*13 ) + 1;
    
//     if (cardValue === 1) {
//         cardValue = 11;
//     } else if (cardValue > 10 ) {
//         cardValue = 10;
//     } else {
//         return cardValue;
//     }
//     return cardValue;
// }