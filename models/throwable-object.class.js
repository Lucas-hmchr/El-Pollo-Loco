class ThrowableObject extends MovableObject{

    speedY = 30;
    speedX = 20;

    // IMAGES_THROWING = [
    //     '../assets/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    //     '../assets/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    // ]

    constructor(x, y) {
        super().loadImage('../assets/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        // this.x = Math.random() * (maxx - minx + 1) + minx;
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 65;
        this.throw()
    }

    throw() {
        this.speedY = 30;
        this.applyGravity()
        setInterval(() => {
            this.x += 10;
        }, 25)
    }
}