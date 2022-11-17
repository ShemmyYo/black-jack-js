// GAME Page DOM Elements
const dealerSumEl = document.getElementById("dealer-sum");
//const dealerNameEl = document.getElementById("dealer-name-h2");
const playerNameEl = document.getElementById("player-name-h2");

// GAME messages Elements
const cardsAtStart1 = document.getElementById("cards-at-start1");
const cardsAtStart2 = document.getElementById("cards-at-start2");
const cardsAtStart3 = document.getElementById("cards-at-start3");
//const messageBox = document.getElementById("inner-game-box-msg");
const blackjackEl = document.getElementById("blackjack-el");
const bustedEl = document.getElementById("busted-el");
const gameOverEl = document.getElementById("game-over-el");
const messageEl = document.getElementById("message-el");
let totalEl = document.getElementById("player-sum");
let creditEl = document.getElementById("credit-el");
let roundEl = document.getElementById("round-el");

//GAME buttons Elements
const bttnStay = document.getElementById("bttn-stay");
const bttnHit = document.getElementById("bttn-hit");
const bttnStart = document.getElementById("bttn-start");
const bttnReset = document.getElementById("bttn-reset");
const bttnHighScores = document.getElementById("bttn-high-scores");

// High Scores Elements
//const startGameAgainBtn = document.getElementById("startGameAgain");
//const scoresBgWraper = document.getElementById("scores-bg-wraper");
const scoresList = document.getElementById("scores-list-style");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// High Scores Buttons
//const bttnSave = document.getElementById("bttn-save-score");
//const bttnClearScores = document.getElementById("bttn-clear-score");
const scoresWindow = document.getElementById("scores-wraper");

//sounds
const defeatSound = new Audio('assets/sounds/sfx-defeat.mp3');
const victorySound = new Audio('assets/sounds/sfx-victory.mp3');

// Variables
//let cards;
let cardsDeck;
let hidden;
let dealerSum = 0;
let playerSum = 0;
//let hasBlackJack = false;
//let howManyBlackJaks = 0;
let round = localStorage.getItem("bj-round");
round = parseInt(round);
let credit = localStorage.getItem("bj-credit");
credit = parseInt(credit);
let message = "";

// Onload procedure 
window.onload = function() {
    playerNameEl.innerHTML = localStorage.getItem("bj-playerName") + ":";
    creditEl.innerHTML = "Credit: " + localStorage.getItem("bj-credit");
    roundEl.innerHTML = "Round :" + localStorage.getItem("bj-round");
    messageEl.innerHTML = "Do you want to play a round? <br><br><b><div class='msg-bttn' onclick='startFirstGame()'>>>> START NEW GAME <<<</div></b>";
    round +=1;
    roundEl.innerHTML = "Round: " + round;
};

// Bttn START procedure
bttnStart.addEventListener("click", startFirstGame);
function startFirstGame() {
    messageEl.innerHTML = "so what will you do now? " + localStorage.getItem("bj-playerName") + "!<br><br><b><div class='msg-bttn' onclick='hit()'>>>> Hit! <<<</div></b><br><b><div class='msg-bttn' onclick='stay()'>>>> STAY <<<</div></b><br>Are you feeling lucky???";
    createDeck();
    shuffleDeck();
    firstGame();
}

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
}

// Function shuffling deck of cards before randow card draw
function shuffleDeck() {
    for (let i = 0; i < 52; i++) {
        let j = Math.floor(Math.random() * 52);
        let temp = cardsDeck[i];
        cardsDeck[i] = cardsDeck[j];
        cardsDeck[j] = temp;
        }
}

// Function witch renders cards for Player and Dealer (incl. hidden dealer card) 
function firstGame() {
    cardsAtStart1.style.display = "none";
    cardsAtStart2.style.display = "none";
    cardsAtStart3.style.display = "none";
    bttnStart.style.display = "none";
    bttnHit.style.display = "inline";
    bttnStay.style.display = "inline";
    bttnReset.style.display = "none";
    bttnHighScores.style.display = "none";  
    hidden = cardsDeck.pop();
    dealerSum += getValue(hidden);
    while (dealerSum < 17) {
        let cardImg = document.createElement("img");
        let card = cardsDeck.pop();
        cardImg.src = "./assets/images/deck/" + card + ".png";
        cardImg.classList = "cards";
        dealerSum += getValue(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = cardsDeck.pop();
        cardImg.src = "./assets/images/deck/" + card + ".png";
        cardImg.classList = "cards";
        playerSum += getValue(card);
        document.getElementById("player-cards").append(cardImg);
    }
    totalEl.innerHTML = "Total: " + playerSum;
    creditEl.innerHTML = "Credit: " + credit;
    if (playerSum === 21) {
        stay();
    }
}
    
// Bttn HIT - Procedure which draws extra cards for the Player and pre-checks if busted or blackjack 
function hit() {
    let cardImg = document.createElement("img");
    let card = cardsDeck.pop();
    cardImg.src = "./assets/images/deck/" + card + ".png";
    playerSum += getValue(card);
    document.getElementById("player-cards").append(cardImg);
    if (playerSum <= 20) {
        message = "Do you want to draw another card?";
    } else if (playerSum === 21) {
        message = "Congratulations!!! You've got a Blackjack!";
        stay();
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
    document.getElementById("hidden").src = "./assets/images/deck/" + hidden + ".png";
    if (playerSum === 21) {
        credit += 5;
        message = "Round: " + round +" - Congratulations!!!<br><br>Credit +5!";
        blackjackEl.style.display = "flex";
        victorySound.play();
    } else if (playerSum > 21) {
        credit -= 1;
        message = "Round: " + round +" - You Lose!<br><br>Credit -1";
        bustedEl.style.display = "flex";
    } else if (dealerSum > 21) {
        credit += 2;
        message = "Round: " + round +" - You (not quite...) Win? " + localStorage.getItem("bj-playerName") + "!<br><br>Your Credit has not changed and is " + credit;
    } else if (playerSum == dealerSum) {
        message = "Tie!<br><br>Your Credit has not changed and is still: " + credit;
    } else if (playerSum > dealerSum) {
        message = "Round: " + round +" - You (sort of...) Win? " + localStorage.getItem("bj-playerName") + "!<br><br>Your Credit has not changed and is " + credit;
    } else if (playerSum < dealerSum) {
        credit -= 1;
        message = "Round: " + round +" - You Lose " + localStorage.getItem("bj-playerName") + "!<br><br>Your Credit has gone down to " + credit;
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

// Function that checks if Credit is availbale for the Player to continue the game
function beforeRestart() {
    bttnHit.style.display = "none";
    bttnStay.style.display = "none";
    bttnReset.style.display = "inline";
    localStorage.setItem("bj-credit", credit);
    localStorage.setItem("bj-round", round);
    if (credit <= 0) {
        defeatSound.play();
        gameOverEl.style.display = "flex";
        bustedEl.style.display = "none";
        bttnReset.style.display = "none";
        bttnHighScores.style.display = "inline";
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
        return b.round - a.round;
    });
    localStorage.setItem('highScores', JSON.stringify(highScores)); 
    localStorage.setItem("bj-credit", 3);
    localStorage.setItem("bj-round", 0);
    bttnHighScores.style.display = "block";    
}

// Function which opens side box and displays High Scores
function showHighScores() {
    scoresWindow.style.display = "block";
    scoresList.innerHTML =
        highScores.map(score => {
        return `<li class="scores-list-style">Rounds: ${score.round} - ${score.player} - ${score.when}</li>`;
    }).join('');
}

function hideScores() {
    scoresWindow.style.display = "none";
}

function clearScores() {
    localStorage.removeItem("highScores");
    location.reload(false);
}

function restartGame() {
    blackjackEl.style.display = "none";
    bustedEl.style.display = "none";
    gameOverEl.style.display = "none";
    location.reload(true);
}