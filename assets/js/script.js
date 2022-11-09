document.getElementById("bttn-card").style.display = "none";
document.getElementById("change-player").style.display = "none";
document.getElementById("enter-game").style.display = "none";


let player = {
    name: "Shemmy",
    credit: 3
};

let round = 1;
let credit = 3;
let welcomeInputPlayerEl = document.getElementById("input-player-name");
let welcomePlayerMsgEl = document.getElementById("enter-game-msg");
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
let dealerSumEl = document.getElementById("dealer-sum");
dealerSumEl.innerHTML = dealerSum;

let playerSum = 0;
let playerSumEl = document.getElementById("player-sum");
playerSumEl.innerHTML = playerSum;

let cardsDeck;
let hidden;

var canHit = true;




window.onload = function() {
    console.log("window onload");
    validatePlayer();
    
};

function clearUser() {
    console.log("clear user");
    localStorage.clear("bj-playerName");
    welcomePlayerMsgEl.innerHTML = "Enter New Player";

    document.getElementById("change-player").style.display = "none";
    document.getElementById("enter-game").style.display = "none";
    document.getElementById("input-player-name").style.display = "compact";
    document.getElementById("bttn-save-player-name").style.display = "compact";
}

function addUser() {

    console.log("add user");
    if (!welcomeInputPlayerEl.value) {
    } else {
        localStorage.setItem("bj-playerName", welcomeInputPlayerEl.value);
        welcomePlayerMsgEl.innerHTML = "Welcome! " + welcomeInputPlayerEl.value;

        document.getElementById("change-player").style.display = "compact";
        document.getElementById("enter-game").style.display = "compact";
        document.getElementById("input-player-name").style.display = "none";
        document.getElementById("bttn-save-player-name").style.display = "none";
    }
}

function validatePlayer() {

    if (localStorage.getItem("bj-playerName")) {
        console.log("user exists");

        message =  "Welcome back! " + localStorage.getItem("bj-playerName");
        welcomePlayerMsgEl.innerHTML = "Welcome back! " + localStorage.getItem("bj-playerName");

        document.getElementById("change-player").style.display = "compact";
        document.getElementById("enter-game").style.display = "compact";
        document.getElementById("input-player-name").style.display = "none";
        document.getElementById("bttn-save-player-name").style.display = "none";

    } else {
        addUser();
    }

    messageEl.innerHTML = message;
    welcomePlayerMsgEl.innerHTML = enterPlayerMsg;
}


function restartGame() {
    createDeck();
    shuffleDeck();
    // startGame();
}

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

// function restartGame() {
//     location.reload(true);  
// }

function restartGame_() {
    console.log("restart function start");
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

    dealerSumEl.innerHTML = "";
    playerSumEl.innerHTML = playerSum;
    messageEl.innerHTML = "";
    playerEl.innerHTML = "Credit: " + credit; 
    
    canHit = true;
    createDeck();
    shuffleDeck();
    startGame();
    console.log("restart function stop");
}

function startGame() {
    canHit = true;
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

    playerSumEl.innerHTML = playerSum;
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
        credit +=3 ;
        message = "You Win " + player.name + "!<br>Your Credit has gone up by 3 and is now:" + credit;

    } else if (playerSum == dealerSum) {
        message = "Tie!<br>Your Credit has not changeda and is now:" + credit;
        
    } else if (playerSum > dealerSum) {
        credit += 1;
        message = "You Win " + player.name + "!<br>Your Credit has not changeda and is now:" + credit;
        
    } else if (playerSum < dealerSum){
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









// function startGame2() {
//         if (sum === 0) {
//         isActive = true;
//         hasBlackJack = false;
//         let card1 = getRandomCard();
//         let card2 = getRandomCard();
//         cards = [card1, card2];
//         sum = card1 + card2;

//         game();

//         // document.getElementById("bttn-start").style.display = "hidden";
//         // document.getElementById("bttn-card").style.display = "visible";
//         // document.getElementById("bttn-save").style.display = "visible";
//     }
// }






function slideWelcomeWindowLeft() {

    let id = null;
    const welcomeWindow = document.getElementById("instructions-wraper") 
    let pos = 0;
    let opa = 1;
    clearInterval(id);
    id = setInterval(frame, 0);
    function frame() {
        if (pos == -1000) {
            clearInterval(id);
        } else {
            pos++; 
            opa = opa - 0.009;
            // welcomeWindow.style.top = pos + "px"; 
            welcomeWindow.style.right = pos + "px"; 
            welcomeWindow.style.opacity = opa;
        }
    }


}