// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);;
const userName = document.getElementById(`username`);;
const userSelection = document.getElementById(`user-selection`);;
const goButton = document.getElementById(`go-button`);;
const scoreParagraph = document.getElementById(`score`);;
const gameHistoryParagraph = document.getElementById(`game-history`);;

// instantiate the game object from the `RockPaperScissors` class.
let game

// hide game screen
//gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph =  `${userName}:${game.score.user} vs CPU:${game.score.cpu}`;
}
// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph = game.gameHistoryLog
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName
  game = new RockPaperScissors(username);
  //gameScreen.classList.remove(`d-none`);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  game.play('rock')
  updateScoreTallyUI()
  updateGameHistoryUI()
});
