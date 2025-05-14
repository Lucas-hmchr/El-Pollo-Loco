const body = document.querySelector('body')
const screen = document.getElementById('screen')
const startScreen = document.getElementById('startScreen');
const endScreen = document.getElementById('endScreen');
let controlBtns = document.getElementById('controlButtons');

// const muteBtn = document.getElementById('muteBtn');
// const muteBtnIcon = document.getElementById('muteBtnIcon');
// const instructionsBtn = document.getElementById('instructionsBtn');

let gameIsMute = false;

function init() {
    startScreen.innerHTML = startScreenMenuTemplate();
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
