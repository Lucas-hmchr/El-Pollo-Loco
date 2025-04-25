class MovableObject {
    x = 100;
    y = 300;
    img;
    height = 150;
    width = 100;

    imageCache = {};

    currentImage = 0;

    speed = 0.15;

    otherDirection = false;
    speedY = 0;
    acceleration = 3;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    life = 100;
    // animationTime = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    moveLeft(otherDirection) {
        this.x -= this.speed;
        this.otherDirection = otherDirection;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 85;
    }

    jump() {
        this.speedY = 30;
    }

    isColliding(mo){
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
        this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
        this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    characterLife() {
        return this.life;
    }





}