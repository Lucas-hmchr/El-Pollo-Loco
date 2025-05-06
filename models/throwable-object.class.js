class ThrowableObject extends MovableObject {

    speedY = 30;
    speedX = 20;
    id = Date.now();

    IMAGES_THROWING = [
        '../assets/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../assets/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../assets/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../assets/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    IMAGES_SPLASHING = [
        '../assets/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../assets/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../assets/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../assets/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../assets/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../assets/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    throwIntervalId;
    isFlying;

    constructor(x, y) {
        super().loadImage('../assets/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_THROWING)
        this.loadImages(this.IMAGES_SPLASHING)
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 65;
        this.throw()
    }

    throw() {
        this.speedY = 30;
        this.applyGravity()
        this.throwIntervalId = setInterval(() => {
            this.x += 10;
        }, 25);
        this.throwAnimation()
        this.isFlying = true;
    }

    throwAnimation() {
        setInterval(() => {
            if (this.isFlying) {
                this.playAnimation(this.IMAGES_THROWING)
            }
        }, 75)
    }

    splashAnimation() {
        this.playAnimationOnce(this.IMAGES_SPLASHING, 800)
        this.moveObjBelowCanvas(800);

    };

    stopThrow() {
        this.removeGravity();
        this.splashAnimation();
        clearInterval(this.throwIntervalId);
        this.isFlying = false;
        return true;
    }
}