// WELCOME Page DOM Elements
const loginInputPlayerEl = document.getElementById("input-player-name");
const loginBttnSaveNewPlayerEl = document.getElementById("bttn-save-player-name");
const loginMsgBoxEl = document.getElementById("enter-game-msg");
const loginBttnChangePlayerEl = document.getElementById("change-player");
const loginNewPlayerBoxEl = document.getElementById("player-new-name-empty");
const loginOldPlayerBoxEl = document.getElementById("player-old-name-empty");

window.onload = function() {
    validatePlayer();
};

//Function validating user existance 
function validatePlayer() {
    if (localStorage.getItem("bj-playerName")) {
        loginMsgBoxEl.style.display = "block";
        loginMsgBoxEl.innerHTML = "Welcome back! " + localStorage.getItem("bj-playerName");
        loginNewPlayerBoxEl.style.display = "none";
        loginOldPlayerBoxEl.style.display = "inline";
        localStorage.setItem("bj-credit", 3);
        localStorage.setItem("bj-round", 0);
    } 
}

// Function removing Player from local memory
loginBttnChangePlayerEl.addEventListener("click", function remPlayer(){
    localStorage.removeItem("bj-playerName");
    localStorage.setItem("bj-credit", 3);
    localStorage.setItem("bj-round", 0);
    loginNewPlayerBoxEl.style.display = "inline";
    loginOldPlayerBoxEl.style.display = "none";
});

// Function adding new Player and setting up credits to 3 and rounds to 0
loginBttnSaveNewPlayerEl.addEventListener("click", function addPlayer(){
    if (!loginInputPlayerEl.value) {
        alert("Enter and save Your name Player! ");
    } else {
        localStorage.setItem("bj-playerName", loginInputPlayerEl.value);
        localStorage.setItem("bj-credit", 3);
        localStorage.setItem("bj-round", 0);
        loginMsgBoxEl.innerHTML = "Welcome! " + localStorage.getItem("bj-playerName");
        loginNewPlayerBoxEl.style.display = "none";
        loginOldPlayerBoxEl.style.display = "inline";
    }
});
