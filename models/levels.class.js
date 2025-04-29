class Level {
    enemies;
    clouds;
    backgroundObjects;
    // throwableObjects;
    level_end_x = 2200;
    statusBars;

    constructor(enemies, clouds, backgroundObjects, throwableObjects, statusBars) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        // this.throwableObjects = throwableObjects;
        this.statusBars = statusBars;
    }
}