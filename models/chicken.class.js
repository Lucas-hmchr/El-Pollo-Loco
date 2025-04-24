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

        this.speed = 0.15 + Math.random() * 0.25;

        this.animateWalk();
    }

    animateWalk() {
        this.moveLeft()
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 200)
    }
}