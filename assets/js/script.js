document.getElementById("bttn-start").style.visibility = "hidden";
document.getElementById("bttn-card").style.visibility = "hidden";
document.getElementById("bttn-save").style.visibility = "hidden";
document.getElementById("sum-el").style.visibility = "hidden";
document.getElementById("credit-el").style.visibility = "hidden";
document.getElementById("round-el").style.visibility = "hidden";
//document..getElementById("card-1").style.visibility = "hidden";
//document.getElementById("card-2").style.visibility = "hidden";
//document.getElementById("card-3").style.visibility = "hidden";
//document.getElementById("card-4").style.visibility = "hidden";
//document.getElementById("card-5").style.visibility = "hidden";

let player = {};
let rounds = 1;
let isAlive = false;
let hasBlackJack = false;

let playerMsg = "<hr><b>Welcome Stranger! <br> Wanna play a round?</b>";
let message = "<br><h6>Type in your name first and click <br> >>> SAVE YOUR NAME <<<</h6><hr>";
let cards = [];
let sum = 0;
let credit = "";

let playerEl = document.getElementById("player-el");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let creditEl = document.getElementById("credit-el");
let roundEl = document.getElementById("round-el");

messageEl.innerHTML = message;
playerEl.innerHTML = playerMsg;

function newPlayerGame() { //function called on bttn click
    console.log("newPlayer");
    // input and save bttn visibility set
    document.getElementById("input-save-name").style.visibility = "hidden";
    document.getElementById("bttn-save-name").style.visibility = "hidden";
    document.getElementById("bttn-start").style.visibility = "visible";
    document.getElementById("bttn-card").style.visibility = "hidden";
    document.getElementById("bttn-save").style.visibility = "hidden";
    document.getElementById("sum-el").style.visibility = "visible";
    document.getElementById("credit-el").style.visibility = "visible";
    document.getElementById("round-el").style.visibility = "visible";

    let newPlayer = document.getElementById("input-save-name").value; //grab input-save-name
    if (newPlayer === "") { //check if not empty
        alert("please type your name before we start!");
    } else {
        player = { name: newPlayer, credit: 3 };  //create array/object name/credit=3
        playerMsg = `<hr><h5>` + "Your Credit: " + player.credit + `</h5><h2>` + "Welcome! " + player.name + `</h2><br><h6>` + "Click  >>> START NEW GAME <<<  to draw first 2 cards" + `</h6><hr>`; //update name & credit innerHTML

        //reset all stats
        sum = 0;
        cards = [];
        message = "";
    }

    console.log(player.name);
    messageEl.innerHTML = message;
    playerEl.innerHTML = playerMsg;
    roundEl.innerHTML = "Round No.: " + rounds;
}

function startGame() {
    sum = 0;
    cards = [];
    if (sum === 0) {
        console.log("startGame");
        if (sum === 0) {
            isAlive = true;
            hasBlackJack = false;
            let card1 = getRandomCard();
            let card2 = getRandomCard();
            cards = [card1, card2];
            sum = card1 + card2;
            credit = "Credit: " + player.credit;

            game();

            document.getElementById("bttn-start").style.visibility = "hidden";
            document.getElementById("bttn-card").style.visibility = "visible";
            document.getElementById("bttn-save").style.visibility = "visible";
            creditEl.innerHTML = "Credit: " + player.credit;
            sumEl.innerHTML = "Total: " + sum;
        }
    } else {
        console.log("didnt startGame sum=0");
    }
}

function game() {
    console.log("game");
    cardsEl.innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " ";
        if (sum < 20) {
            message = "Do you want to draw another card?<hr>";
            playerMsg = "<hr>Round: " + rounds + ". What are you gonna do now " + player.name + "?";
        } else if (sum === 20){
            message = "<br>Draw another one?<hr>";
            playerMsg = "<hr>20! You are very close " + player.name;
        } else if (sum === 21) {
            message = "Bonus +3 points will been assigned to your Credit Score<br>Save Your Credit and play again!<hr>";
            playerMsg = "<hr>Well, well... Congratulations!!! You've got a Blackjack! " + player.name + "<br><h5>Your Credit: " + player.credit + `</h5>`;
        } else {
            message = "...meeeh. Is that all you can do " + player.name + " ?<br>Deducting 1 Credit Point from Your Score!<hr>";
            playerMsg = "<hr>You loose " + player.name + " ! Good luck next time!";
        }
    }
    messageEl.innerHTML = message;
    playerEl.innerHTML = playerMsg;
    creditEl.innerHTML = "Your Credit: " + player.credit;
    roundEl.innerHTML = "Round No.: " + rounds;
    sumEl.innerHTML = "Cards total: " + sum;
}

function saveGame() {
    console.log("saveGame");
    document.getElementById("bttn-save").style.visibility = "hidden";
    document.getElementById("bttn-card").style.visibility = "hidden";
    document.getElementById("bttn-start").style.visibility = "visible";

    if (sum < 20) {
        player.credit -= 1;
        rounds += 1;
        message = "...meeeh. Is that all you can do " + player.name + " ?<br>Deducting 1 Credit Point from Your Score!<hr>";
        playerMsg = "<hr>Really??? " + player.name + "";
    } else if (sum === 20){
        player.credit += 1;
        rounds + 1;
        message = "<br>I'll give you 1 Credit for this<hr>";
        playerMsg = "<hr>Not bad " + player.name + ", now lets play again<br><h5>Your Credit: " + player.credit + `</h5>`;
    } else if (sum === 21) {
        player.credit += 3;
        rounds += 1;
        message = "Bonus +3 points have been assigned to your Credit Score<br>Save Your Credit and play again!<hr>";
        playerMsg = "<hr>Well done " + player.name + ", now lets play again<br><h5>Your Credit: " + player.credit + `</h5>`;
        hasBlackJack = true; 
    } else {
        player.credit -= 1;
        rounds += 1;
        message = "...meeeh<br>Deducting 1 Credit Point from Your Score!<hr>";
        playerMsg = "<hr>Ohhh well... At least you tried " + player.name + " ! Good luck next time!";
        isAlive = false;
        //saveGame();
    }

    if (player.credit < 1 ) {
    document.getElementById("bttn-start").style.visibility = "hidden";
    document.getElementById("bttn-card").style.visibility = "hidden";
    document.getElementById("bttn-save").style.visibility = "hidden";
    message = "Good game " + player.name + "! You've played " + rounds + " rounds!<hr>";
    playerMsg = "<hr>GAME OVER";
    alert(player.name + " - You run out of Credit!<br>>>> GAME OVER <<<");
    }

    messageEl.innerHTML = message;
    playerEl.innerHTML = playerMsg;
    console.log(player.credit); 
    creditEl.innerHTML = "Credit: " + player.credit;
    roundEl.innerHTML = "Round No.: " + rounds;
    sumEl.innerHTML = "Total: " + sum;
}

// newCredit = player.credit +=1;
// console.log("now: " + newCredit);

// newCredit = player.credit +=3;
// console.log("now: " + newCredit);

// break;


// newCredit = player.credit -=1;
// console.log("now: " + newCredit);

// break;

function newCard() {  //called on click 
    console.log("newCard");
    
    if (isAlive === true && hasBlackJack === false && sum < 22) { 
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        game();
    }
}

function getRandomCard() {
    
    let cardValue = Math.floor( Math.random()*13 ) + 1;
    console.log("randomCard: " + cardValue);

    if (cardValue === 1) {
        cardValue = 11;
    } else if (cardValue > 10 ) {
        cardValue = 10;
    } else {
        return cardValue;
    }
    
    return cardValue;
}


    // let cardsDeck = [
    //     {
    //         name:2,
    //         value: 2
    //     },
    //     {
    //         name:3,
    //         value: 3
    //     },
    //     {
    //         name:4,
    //         value: 4
    //     },
    //     {
    //         name:5,
    //         value: 5
    //     },
    //     {
    //         name:6,
    //         value: 6
    //     },
    //     {
    //         name:7,
    //         value: 7
    //     },
    //     {
    //         name:8,
    //         value: 8
    //     },
    //     {
    //         name:9,
    //         value: 9
    //     },
    //     {
    //         name:10,
    //         value: 10
    //     },
    //     {
    //         name:"Jack of ",
    //         value: 10
    //     },
    //     {
    //         name:"Queen of ",
    //         value: 10
    //     },
    //     {
    //         name:"King of ",
    //         value: 10
    //     },
    //     {
    //         name:"As of ",
    //         value: 11
    //     },
    // ];



    // let card1 = getRandomCard();
// let card2 = getRandomCard();
// let card3 = getRandomCard();
// let card4 = getRandomCard();
// let card5 = getRandomCard();