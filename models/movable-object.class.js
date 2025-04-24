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

    // setAnimationTime(newTime) {
    //     if (newTime) {
    //         this.animationTime = newTime;
    //         console.log(this.animationTime)
    //     } else {
    //         this.animationTime = 100;
    //     }
    // }

}