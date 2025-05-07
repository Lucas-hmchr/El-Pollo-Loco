class Endboss extends MovableObject {
    
    height = 400;
    width = 300;
    y = 50;

    offset = {
        top: 60,
        bottom: 0,
        left: 0,
        right: 0,
    }

    IMAGES_WALKING = [
        '../assets/4_enemie_boss_chicken/2_alert/G5.png',
        '../assets/4_enemie_boss_chicken/2_alert/G6.png',
        '../assets/4_enemie_boss_chicken/2_alert/G7.png',
        '../assets/4_enemie_boss_chicken/2_alert/G8.png',
        '../assets/4_enemie_boss_chicken/2_alert/G9.png',
        '../assets/4_enemie_boss_chicken/2_alert/G10.png',
        '../assets/4_enemie_boss_chicken/2_alert/G11.png',
        '../assets/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING)
        this.x = 2000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200)
    }
}