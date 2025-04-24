class Chicken extends MovableObject{

    height = 90;
    y = 340;
    x = 200 + (Math.random() * 500);

    IMAGES_WALKING = [
        '../assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../assets/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../assets/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor() {
        super().loadImage('../assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING)

        this.speed = 0.15 + Math.random() * 0.5;

        this.animateWalk();
    }

    animateWalk() {
        setInterval(() => {
            this.moveLeft(false)
        }, 1000/60)
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200)
    }
}