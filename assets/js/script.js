// document.getElementById("bttn-card").style.display = "none";
// document.getElementById("change-player").style.display = "none";
// document.getElementById("enter-game").style.display = "none";

// WELCOME Page DOM Elements
let loginInputPlayerEl = document.getElementById("input-player-name");
let loginBttnSaveNewPlayerEl = document.getElementById("bttn-save-player-name");
let loginMsgBoxEl = document.getElementById("enter-game-msg");
let loginBttnChangePlayerEl = document.getElementById("change-player");
let loginBttnEnterGameEl = document.getElementById("enter-game");

let loginNewPlayerBoxEl = document.getElementById("player-new-name-empty");
let loginOldPlayerBoxEl = document.getElementById("player-old-name-empty");

// GAME Page DOM Elements
let dealerSumEl = document.getElementById("dealer-sum");
let playerSumEl = document.getElementById("player-sum");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

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
    console.log("window onload");
    validatePlayer();
    
};

function validatePlayer() {

    if (localStorage.getItem("bj-playerName")) {
        console.log("user exists");

        loginMsgBoxEl.innerHTML = "Welcome back! " + localStorage.getItem("bj-playerName");
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

loginBttnEnterGameEl.addEventListener("click", )



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
    location.reload(true);  
}