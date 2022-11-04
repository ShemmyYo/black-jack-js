

// let card1 = getRandomCard();
// let card2 = getRandomCard();
// let card3 = getRandomCard();
// let card4 = getRandomCard();
// let card5 = getRandomCard();

document.getElementById("bttn-start").style.visibility = "hidden";
document.getElementById("bttn-card").style.visibility = "hidden";
document.getElementById("bttn-save").style.visibility = "hidden";

let player = {};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");


function newPlayerGame(){

    //grab input-save-name
    let newPlayer = document.getElementById("input-save-name").value;
    //check if not empty
    if (newPlayer == "") {
        alert("please type your name before we start!")
    } else {
    //create array/object name/credit=3
    player = {name:newPlayer, credit: 3};
    //update name & credit innerHTML
    playerEl.innerHTML = "Welcome! " + player.name + `<br>` + " Your Credit: " + player.credit;
    // input and save name bttn to get to not-visible
    document.getElementById("input-save-name").style.visibility = "hidden";
    document.getElementById("bttn-save-name").style.visibility = "hidden";
    document.getElementById("bttn-start").style.visibility = "visible";
    document.getElementById("bttn-card").style.visibility = "visible";
    document.getElementById("bttn-save").style.visibility = "visible";
    //reset all stats
    sum: 0; 
    cards = [];
    message = "";
    };
};

function startGame() {
        if (sum === 0) {
        isAlive = true;
        hasBlackjack = false
        let card1 = getRandomCard();
        let card2 = getRandomCard();
        cards = [card1, card2];
        sum = card1 + card2;

        game();

        document.getElementById("bttn-start").style.visibility = "visible";
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

        saveGame()
        
    } else {
        message = "You loose!"
        isAlive = false;
        
        saveGame()
    }
    
    messageEl.innerHTML = message;
    // playerEl.innerHTML = player.name + " Credit: " + player.credit;

    };
}

function saveGame() {
    document.getElementById("bttn-save").style.visibility = "hidden";
    if (isAlive === true && hasBlackJack === false) {
        console.log("save game");
    } else if (isAlive === true && hasBlackJack === true) {
        console.log("bj- save game");
    } else {
        console.log("lost save game");
    }
}

// newCredit = player.credit +=1;
// console.log("now: " + newCredit);

// newCredit = player.credit +=3;
// console.log("now: " + newCredit);

// break;


// newCredit = player.credit -=1;
// console.log("now: " + newCredit);

// break;

function newCard() {
    
    if (isAlive === true && hasBlackJack === false) { 
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        game();
    };
}

function getRandomCard() {

    let cardsDeck = [
        {
            name:2,
            value: 2
        },
        {
            name:3,
            value: 3
        },
        {
            name:4,
            value: 4
        },
        {
            name:5,
            value: 5
        },
        {
            name:6,
            value: 6
        },
        {
            name:7,
            value: 7
        },
        {
            name:8,
            value: 8
        },
        {
            name:9,
            value: 9
        },
        {
            name:10,
            value: 10
        },
        {
            name:"Jack of ",
            value: 10
        },
        {
            name:"Queen of ",
            value: 10
        },
        {
            name:"King of ",
            value: 10
        },
        {
            name:"As of ",
            value: 11
        },
    ];
    
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