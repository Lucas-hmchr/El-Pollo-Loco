class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    level_end_x = 2200;
    statusBars;

    constructor(enemies, clouds, backgroundObjects, bottles, statusBars) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.statusBars = statusBars;
    }
}