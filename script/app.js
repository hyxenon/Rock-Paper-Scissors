const rock = document.querySelectorAll(".weapon-btn");
const player = document.querySelector(".player-score");
const computer = document.querySelector(".computer-score");
let playerImage = document.getElementById("player");
let computerImage = document.getElementById("computer");
const drawElement = document.querySelector(".draw");
const playerBounce = document.querySelector(".play-image");
const playAgainBtn = document.querySelector(".play-again-btn");
const playAgainContainer = document.querySelector(".play-again");


let playerScore = 0;
let computerScore = 0;
let draw = false;
const drowShow = drawElement.classList;
function computerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

function checkWinner(player_choice, computer_choice) {
  if (computer_choice == player_choice) {
    return (draw = true);
  }

  if (computer_choice == "rock") {
    if (player_choice == "scissors") {
      computerScore += 1;
      return "computer";
    } else {
      playerScore += 1;
      return "player";
    }
  } else if (computer_choice == "paper") {
    if (player_choice == "rock") {
      computerScore += 1;
      return "computer";
    } else {
      playerScore += 1;
      return "player";
    }
  } else if (computer_choice == "scissors") {
    if (player_choice == "paper") {
      computerScore += 1;
      return "computer";
    } else {
      playerScore += 1;
      return "player";
    }
  }
}

function changeImage(playerChoice, computerChoice) {
  playerImage.src = `./images/${playerChoice}.png`;
  computerImage.src = `./images/${computerChoice}.png`;
}

function showDraw(winner) {
  
  drowShow.add("show-draw");
  if (draw) {
    drawElement.textContent = "draw";
  } else {
    drawElement.textContent = `${winner} won`;
  }
}

rock.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playerBounce.classList.add("bounce");
    const playerChoice = e.currentTarget.dataset.id;
    const computerC = computerChoice();
    const winner = checkWinner(playerChoice, computerC);
    setTimeout(() => {
      showDraw(winner);
      draw = false;
      changeImage(playerChoice, computerC);
      player.textContent = playerScore;
      computer.textContent = computerScore;
      playerBounce.classList.remove("bounce");

      if (playerScore === 5 || computerScore === 5) {
        playAgainContainer.classList.add("show-play-again");
      }
    }, 500);
  });
});

playAgainBtn.addEventListener("click", () => {
  playAgainContainer.classList.remove("show-play-again");
  playerScore = 0;
  computerScore = 0;
  player.textContent = 0
  computer.textContent = 0
  drawElement.textContent = ""
});
