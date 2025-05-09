function changeIcon(element, path) {
    element.src = path;
}

function loudGame() {
    const muteBtnIcon = document.getElementById('muteBtnIcon');
    changeIcon(muteBtnIcon, './assets/icons/sound.svg');
    gameIsMute = false;
}

function muteGame() {
    const muteBtnIcon = document.getElementById('muteBtnIcon');
    changeIcon(muteBtnIcon, './assets/icons/mute.svg');
    gameIsMute = true;
}