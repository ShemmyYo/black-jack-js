// document.getElementById("bttn-card").style.display = "none";s
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
let dealerSumEl = document.getElementById("dealer-sum");
let dealerNameEl = document.getElementById("dealer-name-h2");
let playerNameEl = document.getElementById("player-name-h2");
// let cardsEl = document.getElementById("cards-el");
// let playerEl = document.getElementById("player-el");

// GAME messages Elements
let messageBox = document.getElementById("inner-game-box-msg");
let blackjackEl = document.getElementById("blackjack-el");
let messageEl = document.getElementById("message-el");

let totalEl = document.getElementById("player-sum");
let creditEl = document.getElementById("credit-el");
let roundEl = document.getElementById("round-el");

//GAME buttons Elements
let bttnStay = document.getElementById("bttn-stay");
let bttnHit = document.getElementById("bttn-hit");
let bttnStart = document.getElementById("bttn-start");
let bttnReset = document.getElementById("bttn-reset");


// Variables
let cards;
let cardsDeck;
let hidden;

let dealerSum = 0;
let playerSum = 0;

let canHit = true;
let canStay = true;
let canReset = false;
let hasBlackJack = false;
let howManyBlackJaks = 0;

let round = localStorage.getItem("bj-round");
let credit = localStorage.getItem("bj-credit");

let message = "";

// playerEl.innerHTML = localStorage.getItem("bj-playerName") + " Credit: " + player.credit;
// dealerSumEl.innerHTML = dealerSum;
// totalEl.innerHTML = playerSum;

// Event Listeners

window.onload = function() {
    console.log("game window onload");
    playerNameEl.innerHTML = localStorage.getItem("bj-playerName") + ":";
    creditEl.innerHTML = "Credit: " + localStorage.getItem("bj-credit");
    roundEl.innerHTML = "Round :" + localStorage.getItem("bj-round");
    messageEl.innerHTML = "Do you want to play a round? <br><br><b>>>> START NEW GAME <<<</b>";

};

bttnStart.addEventListener("click", function startFirstGame() {
    console.log("fisrt start");
    messageEl.innerHTML = "so what will you do now? " + localStorage.getItem("bj-playerName") + "!<br><br><b>>>> Hit! <<<</b><br><b>>>> STAY <<<</b><br><br>Are you feeling lucky???";
    
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
    bttnReset.style.display = "none";

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
        cardImg.classList = "cards";
        dealerSum += getValue(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log("D: " + dealerSum);

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = cardsDeck.pop();
        cardImg.src = "./assets/images/deck/" + card + ".png";
        cardImg.classList = "cards";
        playerSum += getValue(card);
        document.getElementById("player-cards").append(cardImg);
    }

    console.log("P " + playerSum);
    totalEl.innerHTML = "Total: " + playerSum;
    creditEl.innerHTML = "Credit: " + credit;
    roundEl.innerHTML = "Round: " + round;

    if (playerSum === 21) {
        hasBlackJack = true;
        stay();
    }
}
    
function hit() {
    if (!canHit) {
        alert("hit not working");
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

        // hasBlackJack = true;
        // canHit = false;

    } else {
        message = "";
        totalEl.innerHTML = "Total: " + playerSum;
        creditEl.innerHTML = "Credit: " + credit;
        roundEl.innerHTML = "Round: " + round;

        // canHit = false;
        stay();
    }
    messageEl.innerHTML = message;

    totalEl.innerHTML = "Total: " + playerSum;
    creditEl.innerHTML = "Credit: " + credit;
    roundEl.innerHTML = "Round: " + round;
}

function stay() {
    canHit = false;
    document.getElementById("hidden").src = "./assets/images/deck/" + hidden + ".png";

    if (playerSum === 21) {
        credit += 5;
        message = "Congratulations!!! You've got a Blackjack!<br><br>Your Credit has gone up by 5 and is now: " + credit;


    } else if (playerSum > 21) {
        credit -= 1;
        message = "You Lose " + localStorage.getItem("bj-playerName") + "!<br><br>Your Credit has gone down by 1 and is now: " + credit;

    } else if (dealerSum > 21) {
        credit += 2;
        message = "You Win " + localStorage.getItem("bj-playerName") + "!<br><br>Your Credit has gone up by 3 and is now:" + credit;

    } else if (playerSum == dealerSum) {
        message = "Tie!<br>Your Credit has not changeda and is now:" + credit;

    } else if (playerSum > dealerSum) {

        message = "You Win " + localStorage.getItem("bj-playerName") + "!<br><br>but Your Credit has not changed and is now:" + credit;

    } else if (playerSum < dealerSum) {
        credit -= 1;
        message = "You Lose " + localStorage.getItem("bj-playerName") + "";
        
    }
    messageEl.innerHTML = message;

    round +=1;

    dealerSumEl.innerHTML = " & his card's total: " + dealerSum;
    totalEl.innerHTML = "Total: " + playerSum;
    creditEl.innerHTML = "Credit: " + credit;
    roundEl.innerHTML = "Round: " + round;

    beforeRestart();

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

function beforeRestart() {
    bttnHit.style.display = "none";
    bttnStay.style.display = "none";
    bttnReset.style.display = "inline";

    console.log(round);

    localStorage.clear("bj-credit");
    localStorage.setItem("bj-credit", credit);

    localStorage.clear("bj-round");
    localStorage.setItem("bj-round", round);
}

function restartGame() {
    location.reload(true);
}