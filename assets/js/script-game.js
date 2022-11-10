// document.getElementById("bttn-card").style.display = "none";
// document.getElementById("change-player").style.display = "none";
// document.getElementById("enter-game").style.display = "none";

// WELCOME Page DOM Elements
// let loginInputPlayerEl = document.getElementById("input-player-name");
// let loginBttnSaveNewPlayerEl = document.getElementById("bttn-save-player-name");
// let loginMsgBoxEl = document.getElementById("enter-game-msg");
// let loginBttnChangePlayerEl = document.getElementById("change-player");
// no need as only link button - let loginBttnEnterGameEl = document.getElementById("enter-game");
// let loginNewPlayerBoxEl = document.getElementById("player-new-name-empty");
// let loginOldPlayerBoxEl = document.getElementById("player-old-name-empty");

// GAME Page DOM Elements
let blackjack = document.getElementById("blackjack");
let dealerSumEl = document.getElementById("dealer-sum");
let playerSumEl = document.getElementById("player-sum");
let playerNameEl = document.getElementById("player-name-h2");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
//GAME buttons Elements
let bttnStay = document.getElementById("bttn-stay");
let bttnHit = document.getElementById("bttn-hit");
let bttnStart = document.getElementById("bttn-start");

// Variables

let round = 1;
let credit = 3;

let cards;
let cardsDeck;
let hidden;

let dealerSum = 0;
let playerSum = 0;

let canHit = true;
let canStay = true;
let canReset = false;
let hasBlackJack = false;

let message = "";

// playerEl.innerHTML = player.name + " Credit: " + player.credit;
// dealerSumEl.innerHTML = dealerSum;
// playerSumEl.innerHTML = playerSum;

// Event Listeners





window.onload = function() {
    console.log("game window onload");

};

function validatePlayer() {
    if (localStorage.getItem("bj-playerName")) {
        console.log("user exists");

        // loginMsgBoxEl.style.display = "block";
        // loginMsgBoxEl.innerHTML = "Welcome back! " + localStorage.getItem("bj-playerName");
        messageEl.style.display = "inline";
        message =  "Welcome back! " + localStorage.getItem("bj-playerName");

        loginNewPlayerBoxEl.style.display = "none";
        loginOldPlayerBoxEl.style.display = "inline";
  

    } else {
        addPlayer();
   }
}

loginBttnChangePlayerEl.addEventListener("click", function remPlayer(){
    console.log("clear user");
    localStorage.clear("bj-playerName");

    loginNewPlayerBoxEl.style.display = "inline";
    loginOldPlayerBoxEl.style.display = "none";
});

loginBttnSaveNewPlayerEl.addEventListener("click", function addPlayer(){
    console.log("add user");
    if (!loginInputPlayerEl.value) {
        alert("Enter and save Your name Player! ");
    } else {
        localStorage.setItem("bj-playerName", loginInputPlayerEl.value);
        loginMsgBoxEl.innerHTML = "Welcome! " + localStorage.getItem("bj-playerName");

        loginNewPlayerBoxEl.style.display = "none";
        loginOldPlayerBoxEl.style.display = "inline";
    }
});

bttnStart.addEventListener("click", function startFirstGame() {
    console.log("fisrt start");
    playerNameEl.innerHTML = localStorage.getItem("bj-playerName") + ":" ;
    createDeck();
    shuffleDeck();
    firstGame();
});

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

function firstGame() {

    bttnStart.style.display = "none";
    bttnHit.style.display = "inline";
    bttnStay.style.display = "inline";

    canHit = true;
    canStay = true;
    canReset = false;
    hasBlackJack = false;

    canHit = true;
    hidden = cardsDeck.pop();
    dealerSum += getValue(hidden);
    console.log("hidden: " + hidden);
    // console.log(dealerSum);

    while (dealerSum < 17) {
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
    // console.log("P: " + playerSum);
    // document.getElementById("hit").addEventListener("click", hit);
    // document.getElementById("stay").addEventListener("click", stay);

    // playerSumEl.innerHTML = playerSum;
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

    playerSumEl.innerHTML = playerSum;
}

function stay() {
    canHit = false;

    if (playerSum === 21) {
        credit += 5;
        message = "Congratulations!!! You've got a Blackjack!<br>Your Credit has gone up by 5 and is now: " + credit;

    } else if (playerSum > 21) {
        credit -= 1;
        message = "You Lose " + player.name + "!<br>Your Credit has gone down by 1 and is now: " + credit;

    } else if (dealerSum > 21) {
        credit += 3;
        message = "You Win " + player.name + "!<br>Your Credit has gone up by 3 and is now:" + credit;

    } else if (playerSum == dealerSum) {
        message = "Tie!<br>Your Credit has not changeda and is now:" + credit;

    } else if (playerSum > dealerSum) {
        credit += 1;
        message = "You Win " + player.name + "!<br>Your Credit has not changeda and is now:" + credit;

    } else if (playerSum < dealerSum) {
        message = "You Lose " + player.name + "";
    }
    messageEl.innerHTML = message;
    playerEl.innerHTML = "Credit: " + credit;

    dealerSumEl.innerHTML = dealerSum;
    playerSumEl.innerHTML = playerSum;

    console.log("before: " + cardsDeck);
    console.log(hidden);
    document.getElementById("hidden").src = "./assets/images/deck/" + hidden + ".png";
    console.log("after: " + cardsDeck);

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

function restartGame() {
    location.reload(true);
}