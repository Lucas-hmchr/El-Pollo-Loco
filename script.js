const startScreen = document.getElementById('startScreen');
// const muteBtn = document.getElementById('muteBtn');
// const muteBtnIcon = document.getElementById('muteBtnIcon');
// const instructionsBtn = document.getElementById('instructionsBtn');


let gameIsMute = false;

function init() {
    startScreen.innerHTML = startScreenMenuTemplate();
};

function startGame() {
    startScreen.classList.add('d-none');
    initGame();
};

function changeGameSound() {
    gameIsMute ? loudGame() : muteGame();
};

function openInstructions() {
    startScreen.innerHTML = instructionsTemplate();
};

function openPolicy() {
    startScreen.innerHTML = policyTemplate();
};