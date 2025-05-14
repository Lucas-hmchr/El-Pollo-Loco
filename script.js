const body = document.querySelector('body')
const screen = document.getElementById('screen')
const startScreen = document.getElementById('startScreen');
const endScreen = document.getElementById('endScreen');
// const muteBtn = document.getElementById('muteBtn');
// const muteBtnIcon = document.getElementById('muteBtnIcon');
// const instructionsBtn = document.getElementById('instructionsBtn');

let gameIsMute = false;

function init() {
    startScreen.innerHTML = startScreenMenuTemplate();
    setScreenHeight()
};

function startGame() {
    startScreen.remove();
    initGame();
};

function openInstructions() {
    startScreen.innerHTML = instructionsTemplate();
};

function openPolicy() {
    startScreen.innerHTML = policyTemplate();
};
