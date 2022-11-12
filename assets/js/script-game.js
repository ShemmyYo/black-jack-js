// GAME Page DOM Elements
let dealerSumEl = document.getElementById("dealer-sum");
let dealerNameEl = document.getElementById("dealer-name-h2");
let playerNameEl = document.getElementById("player-name-h2");
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
// High Scores Elements
let startGameAgainBtn = document.getElementById("startGameAgain");
let scoresBgWraper = document.getElementById("scores-bg-wraper");
let scoresList = document.getElementById("scores-list-style");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// High Scores Buttons
let bttnSave = document.getElementById("bttn-save-score");
let bttnClearScores = document.getElementById("bttn-clear-score");
let scoresWindow = document.getElementById("scores-wraper");


// Variables
let cards;
let cardsDeck;
let hidden;
let dealerSum = 0;
let playerSum = 0;
let hasBlackJack = false;
let howManyBlackJaks = 0;
let round = localStorage.getItem("bj-round");
round = parseInt(round);
let credit = localStorage.getItem("bj-credit");
credit = parseInt(credit);
let message = "";

// Onload procedure 
window.onload = function() {
    console.log("game window onload");
    playerNameEl.innerHTML = localStorage.getItem("bj-playerName") + ":";
    creditEl.innerHTML = "Credit: " + localStorage.getItem("bj-credit");
    roundEl.innerHTML = "Round :" + localStorage.getItem("bj-round");
    messageEl.innerHTML = "Do you want to play a round? <br><br><b>>>> START NEW GAME <<<</b>";
    round +=1;
    roundEl.innerHTML = "Round: " + round;
};

// Bttn START procedure
    bttnStart.addEventListener("click", function startFirstGame() {
    console.log("fisrt start");
    messageEl.innerHTML = "so what will you do now? " + localStorage.getItem("bj-playerName") + "!<br><br><b>>>> Hit! <<<</b><br><b>>>> STAY <<<</b><br><br>Are you feeling lucky???";
    createDeck();
    shuffleDeck();
    firstGame();
});

// Function creating deck of cards 
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

// Function shuffling deck of cards before randow card draw
function shuffleDeck() {
    for (let i = 0; i < 52; i++) {
        let j = Math.floor(Math.random() * 52);
        let temp = cardsDeck[i];
        cardsDeck[i] = cardsDeck[j];
        cardsDeck[j] = temp;
        }
    console.log(cardsDeck);
}

// Function witch renders cards for Player and Dealer (incl. hidden dealer card) 
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
    if (playerSum === 21) {
        hasBlackJack = true;
        stay();
    }
}
    
// Bttn HIT - Procedure which draws extra cards for the Player and pre-checks if busted or blackjack 
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
    } else {
        message = "";
        totalEl.innerHTML = "Total: " + playerSum;
        creditEl.innerHTML = "Credit: " + credit;
        stay();
    }
    messageEl.innerHTML = message;
    totalEl.innerHTML = "Total: " + playerSum;
    creditEl.innerHTML = "Credit: " + credit;
}

// Bttn STAY - Procedure which checks status of the game adjusts credit / round and renders message for the Player 
function stay() {
    canHit = false;
    document.getElementById("hidden").src = "./assets/images/deck/" + hidden + ".png";
    if (playerSum === 21) {
        credit += 5;
        message = "Round: " + round +" - Congratulations!!! You've got a Blackjack!<br><br>Your Credit has gone up by +5 and is now " + credit;
    } else if (playerSum > 21) {
        credit -= 1;
        message = "Round: " + round +" - You Lose " + localStorage.getItem("bj-playerName") + "!<br><br>Your Credit has gone down by -1 and is now " + credit;
    } else if (dealerSum > 21) {
        credit += 2;
        message = "Round: " + round +" - You (not quite...) Win " + localStorage.getItem("bj-playerName") + "!<br><br>Your Credit has gone up by +2 and is now " + credit;
    } else if (playerSum == dealerSum) {
        message = "Tie!<br>Your Credit has not changeda and is now:" + credit;
    } else if (playerSum > dealerSum) {
        message = "Round: " + round +" - You Win " + localStorage.getItem("bj-playerName") + "!<br><br>but Your Credit has not changed and is " + credit;
    } else if (playerSum < dealerSum) {
        credit -= 1;
        message = "Round: " + round +" - You Lose " + localStorage.getItem("bj-playerName") + "!<br><br>but Your Credit has gone down to " + credit;
    }
    messageEl.innerHTML = message;
    dealerSumEl.innerHTML = " total: " + dealerSum;
    totalEl.innerHTML = "Total: " + playerSum;
    creditEl.innerHTML = "Credit: " + credit;
    beforeRestart();
}

// Function that separes the value of the card from card file name (i.e.: 2-H = sum of 2)  
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

// Function that checks if Credit availbale for the Player to continue the game
function beforeRestart() {
    bttnHit.style.display = "none";
    bttnStay.style.display = "none";
    bttnReset.style.display = "inline";
    localStorage.setItem("bj-credit", credit);
    localStorage.setItem("bj-round", round);
    if (credit <= 0) {
        alert("credit 0 - Game Over");
        bttnReset.style.display = "none";
        canPlay = false;
        saveHighScore();
    }
}

//Function that creates object and array of name/round/score/time???
function saveHighScore(){
    let nowDate = new Date();
    let scoreDate = nowDate.toLocaleString();  
    let score = {
        round: localStorage.getItem('bj-round'),  
        player: localStorage.getItem('bj-playerName'),
        when: scoreDate,  
    };
    highScores.push(score);
    highScores.sort((a,b) => {
        return b.score - a.score;
    });
    localStorage.setItem('highScores', JSON.stringify(highScores));
    showHighScores();
}

function showHighScores() {
    scoresWindow.style.display = "block";
    scoresList.innerHTML =
        highScores.map(score => {
        return `<li class="scores-list-style">Rounds: ${score.round} - ${score.player} - ${score.when}</li>`;
    }).join('');
    localStorage.clear("bj-credit");
    localStorage.clear("bj-round");
}

function hideScores() {
    scoresWindow.style.display = "none";
}

// Function which clears High Scores
function clearScores() {
    localStorage.clear("highScores");
    location.reload(true);
}

// Reset function
function restartGame() {
    location.reload(true);
}