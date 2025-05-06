class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0)

        this.addObjectsToMap(this.level.backgroundObjects)
        this.addObjectsToMap(this.level.clouds)

        // space for fixed Obj
        this.ctx.translate(-this.camera_x, 0)
        this.addObjectsToMap(this.level.statusBars)
        this.ctx.translate(this.camera_x, 0)


        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.throwableObjects)
        this.addObjectsToMap(this.level.bottles)
        this.addObjectsToMap(this.level.coins)
        this.addToMap(this.character)


        this.ctx.translate(-this.camera_x, 0)

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx)
        mo.drawFrame(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    setWorld() {
        this.character.world = this;
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 100)
    }

    checkThrowObjects() {
        if(this.keyboard.D && this.character.availableBottles >= 1) {
            this.character.availableBottles -= 1;
            this.level.statusBars[2].setPercentage(this.level.statusBars[2].percentage -= 10);
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle)
        }
    }

    checkCollisions() {
        this.checkCharacterCollision();
        this.checkBottleCollision();
        this.checkCharacterCollection(this.level.bottles);
        this.checkCharacterCollection(this.level.coins);
        this.checkCharacterJumpingCollision();
    }

    checkCharacterCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !(this.character.inPositionToJumpKill(enemy))) {
                this.character.hurtCharacter();
                this.level.statusBars[0].setPercentage(this.character.life);
            }
        });
    }

    
    checkCharacterJumpingCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.inPositionToJumpKill(enemy)) {
                enemy.kill()
            }
        });
    }

    checkBottleCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.bottleHitsEnemy(enemy)) {
                enemy.kill();
            }
        });
    }
 
    bottleHitsEnemy(enemy) {
        return this.throwableObjects.some((bottle) => {
            if(bottle.isColliding(enemy)) {
                bottle.stopThrow();
            }
            return bottle.isColliding(enemy);
        });
    }

    checkCharacterCollection(objects) {
        objects.forEach((object) => {           
            if (this.character.isTouchingCollectable(object)) {
                if(object instanceof Bottle) this.collectBottle(object);
                if(object instanceof Coin) this.collectCoin(object);
            }
        });
    }

    collectBottle(object) {
        this.level.statusBars[2].setPercentage(this.level.statusBars[2].percentage += 10);
        this.character.availableBottles += 1;
        this.removeObject(object, this.level.bottles);
    }

    collectCoin(object) {
        this.level.statusBars[1].setPercentage(this.level.statusBars[1].percentage += 20);
        this.character.collectedCoins += 1;
        this.removeObject(object, this.level.coins);
    }

    removeObject(object, list) {
        list.splice(list.findIndex((element) => element.id == object.id), 1);
    }

}