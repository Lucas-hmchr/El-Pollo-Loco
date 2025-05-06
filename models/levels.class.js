class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    level_end_x = 2200;
    statusBars;
    coins;

    constructor(enemies, clouds, backgroundObjects, bottles, statusBars, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.statusBars = statusBars;
        this.coins = coins;
    }
}