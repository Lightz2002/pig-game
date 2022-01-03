// "use strict";

// Global Components
let dice = document.querySelector(".dice-img");
let totalScore = document.querySelectorAll(".total-score");
let currentScore = document.querySelectorAll(".current-score");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

// Function
const getRandomNum = () => {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1);
};

// UI
class UI {
    static displayDice() {
        const randomNum = getRandomNum();
        let activePlayerScore = currentScore[0];
        if (!player1.classList.contains("player-active")) {
            activePlayerScore = currentScore[1];
        }
        switch (randomNum) {
            case 1:
                dice.src = "dice-1.png";
                activePlayerScore.textContent = 0;
                this.switchPlayers();
                break;
            case 2:
                dice.src = "dice-2.png";
                activePlayerScore.textContent = Number(activePlayerScore.textContent) + randomNum;
                break;
            case 3:
                dice.src = "dice-3.png";
                activePlayerScore.textContent = Number(activePlayerScore.textContent) + randomNum;
                break;
            case 4:
                dice.src = "dice-4.png";
                activePlayerScore.textContent = Number(activePlayerScore.textContent) + randomNum;
                break;
            case 5:
                dice.src = "dice-5.png";
                activePlayerScore.textContent = Number(activePlayerScore.textContent) + randomNum;
                break;
            case 6:
                dice.src = "dice-6.png";
                activePlayerScore.textContent = Number(activePlayerScore.textContent) + randomNum;
                break;
        }
    }

    static switchPlayers() {
        if (player1.classList.contains("player-active")) {
            player1.classList.remove("player-active");
            player2.classList.add("player-active");
        } else {
            player2.classList.remove("player-active");
            player1.classList.add("player-active");
        }
    }

    static addToScore() {
        if (player1.classList.contains("player-active")) {
            totalScore[0].textContent =
                Number(totalScore[0].textContent) + Number(currentScore[0].textContent);
            currentScore[0].textContent = "0";
        } else {
            totalScore[1].textContent =
                Number(totalScore[1].textContent) + Number(currentScore[1].textContent);
            currentScore[1].textContent = "0";
        }
    }

    static checkWins() {
        let winner = "";
        totalScore.forEach((item, index) => {
            if (item.textContent >= 100) {
                winner = index === 0 ? "1" : "2";
                setTimeout(() => alert(`player ${winner} wins`));
            }
        });
    }
}

// Event : Roll Dice
const rollBtn = document.querySelector(".roll-dice-btn");
rollBtn.addEventListener("click", () => {
    UI.displayDice();
});

// Event : Hold
const holdBtn = document.querySelector(".hold-btn");
holdBtn.addEventListener("click", () => {
    UI.addToScore();
    UI.checkWins();
    UI.switchPlayers();
});

// Event : New Game
const resetBtn = document.querySelector(".new-game-btn");
resetBtn.addEventListener("click", () => {
    currentScore[0].textContent = "0";
    currentScore.forEach((item) => (item.textContent = "0"));
    totalScore.forEach((item) => (item.textContent = "0"));
    dice.src = "dice-1.png";
});

const obj = {
    openingHours
}



