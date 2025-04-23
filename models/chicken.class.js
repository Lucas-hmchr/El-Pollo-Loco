class Chicken extends MovableObject{

    height = 90;
    y = 340;
    x = 200 + (Math.random() * 500);

    IMAGES_WALKING = [
        '../assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../assets/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../assets/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    currentImage = 0;

    constructor() {
        super().loadImage('../assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING)
        this.animateWalk();
    }

    animateWalk() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 200)
    }
}