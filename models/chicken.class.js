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
        // this.
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        if (this.isDead()) {
            
        } else {
            setInterval(() => {

                this.handleMovement();
            }, 1000/60)
            
            setInterval(() => {
                this.handleAnimation();
            }, 200)  
        }
    }

    handleMovement() {
        if(!this.isDead()) this.moveLeft(false);
    }

    handleAnimation() {
        this.isDead() ? this.loadImage('../assets/3_enemies_chicken/chicken_normal/2_dead/dead.png') : this.playAnimation(this.IMAGES_WALKING);
        if(this.isDead()) this.removeBody();
    }

    removeBody() {
        console.log(this.deathDate, new Date().getTime());
        if (this.deathDate && this.deathDate + 1000 < new Date().getTime()) {
            this.width = 0; 
            this.height = 0;
        }
    }
}
