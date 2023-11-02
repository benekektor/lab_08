let userWins = 0;
let aiWins = 0;
let roundsPlayed = 0;

const userScoreElement = document.getElementById("userScore");
const aiScoreElement = document.getElementById("aiScore");
const userNumberElement = document.getElementById("userNumber");
const aiNumberElement = document.getElementById("aiNumber");
const resultElement = document.getElementById("result");

const generateButton = document.getElementById("generateButton");

function getPlayerName() {
    let playerName = prompt("Будь ласка, введіть своє ім'я:");
    if (playerName === null || playerName.trim() === "") {
        alert("Введіть ім'я гравця!");
        return getPlayerName();
    } else {
        return playerName;
    }
}

const playerName = getPlayerName();
userScoreElement.textContent = `${playerName}: 0`;

generateButton.addEventListener("click", function () {
  if (roundsPlayed < 3) {
    let userNumber = Math.floor(Math.random() * 10) + 1;
    let aiNumber = Math.floor(Math.random() * 10) + 1;

    userNumberElement.textContent = userNumber;
    aiNumberElement.textContent = aiNumber;

    if (userNumber > aiNumber) {
      userWins++;
    } else if (aiNumber > userNumber) {
      aiWins++;
    }

    userScoreElement.textContent = `${playerName}: ${userWins}`;
    aiScoreElement.textContent = `AI: ${aiWins}`;

    roundsPlayed++;

    if (roundsPlayed === 3) {
      if (userWins > aiWins) {
        resultElement.textContent = `${playerName} перемагає AI в грі!`;
      } else if (aiWins > userWins) {
        resultElement.textContent = "AI перемагає " + playerName + " в грі!";
      } else {
        resultElement.textContent = "Гра закінчилася в нічию!";
      }
    }
  }
});
