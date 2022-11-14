// WELCOME Page DOM Elements
let loginInputPlayerEl = document.getElementById("input-player-name");
let loginBttnSaveNewPlayerEl = document.getElementById("bttn-save-player-name");
let loginMsgBoxEl = document.getElementById("enter-game-msg");
let loginBttnChangePlayerEl = document.getElementById("change-player");
let loginNewPlayerBoxEl = document.getElementById("player-new-name-empty");
let loginOldPlayerBoxEl = document.getElementById("player-old-name-empty");

// On Load 
window.onload = function() {
    console.log("welcome window onload");
    validatePlayer();
};

//Function validating user existance 
function validatePlayer() {
    if (localStorage.getItem("bj-playerName")) {
        console.log("user exists");
        loginMsgBoxEl.style.display = "block";
        loginMsgBoxEl.innerHTML = "Welcome back! " + localStorage.getItem("bj-playerName");
        loginNewPlayerBoxEl.style.display = "none";
        loginOldPlayerBoxEl.style.display = "inline";
        localStorage.setItem("bj-credit", 3);
        localStorage.setItem("bj-round", 0);
  
    } else {
        addPlayer();
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
    console.log("add user");
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
