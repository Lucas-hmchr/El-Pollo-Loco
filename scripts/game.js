let canvas;
let world;
let keyboard = new Keyboard();

function initGame() {
    if (!canvas) canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
    showControlButtons();
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) keyboard.RIGHT = true; 
    if(e.keyCode === 37) keyboard.LEFT = true;
    if(e.keyCode === 38) keyboard.UP = true;
    if(e.keyCode === 40) keyboard.DOWN = true;
    if(e.keyCode === 32) keyboard.SPACE = true;
    if(e.keyCode === 68) keyboard.D = true;
});

window.addEventListener('keyup', (e) => {
    if(e.keyCode === 39) keyboard.RIGHT = false;
    if(e.keyCode === 37) keyboard.LEFT = false;
    if(e.keyCode === 38) keyboard.UP = false;
    if(e.keyCode === 40) keyboard.DOWN = false;
    if(e.keyCode === 32) keyboard.SPACE = false;
    if(e.keyCode === 68) keyboard.D = false;
});

function changeGameSound() {
    gameIsMute ? loudGame() : muteGame();
};

function displayWinScreen(win){
    hideControlButtons()
    endScreen.classList.remove('d-none');
    endScreen.style.backgroundImage = win ? 'url("./assets/9_intro_outro_screens/game_over/game over.png")' : 'url("./assets/9_intro_outro_screens/game_over/oh no you lost!.png")';
    endScreen.innerHTML = win ? victoryTemplate() : loseTemplate();
}

function restartGame() {
    endScreen.classList.add('d-none');
    if (world) world.stop();
    startGame();
}

function hideControlButtons() {
    if (window.innerWidth < 720) {
        controlBtns.classList.add('d-none')
    }
}

function showControlButtons() {
    if (window.innerWidth < 720) {
        controlBtns.classList.remove('d-none')
    }
}

function goBackToMainMenu() {
    firstRoundOver = true;
    startScreen.classList.remove('d-none');
    canvas.classList.add('d-none');
    endScreen.classList.add('d-none');
    init();
}