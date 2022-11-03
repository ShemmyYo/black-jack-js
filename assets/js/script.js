let card1 = 2;
let card2 = 3;
let card3 = 2;
let card4 = 10;

let sum = card1 + card2 + card3 + card4;

let hasBlackJack = false;
let isAlive = true;

let message = ""

let messageEl = document.getElementById("message-el").innerHTML;


function startGame() {
    
    if (sum <= 20) {
        message = "Do you want to draw another card?"
        messageEl = message;

    } else if (sum === 21) {
        message = "Congratulations!!! You've got a Blackjack!"
        messageEl = "Congratulations!!! You've got a Blackjack!"

        hasBlackJack = true;
    } else {
        message = "You loose!"
        messageEl = "You loose!"

        isAlive = false;
    }
console.log(message);
}