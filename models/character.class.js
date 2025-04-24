class Character extends MovableObject{

    y = 85;
    x = 50;
    height = 350;
    width = 180;
    speed = 10;
    movementStop;

    IMAGES_STANDING = [
        '../assets/2_character_pepe/1_idle/idle/I-1.png',
        '../assets/2_character_pepe/1_idle/idle/I-2.png',
        '../assets/2_character_pepe/1_idle/idle/I-3.png',
        '../assets/2_character_pepe/1_idle/idle/I-4.png',
        '../assets/2_character_pepe/1_idle/idle/I-5.png',
        '../assets/2_character_pepe/1_idle/idle/I-6.png',
        '../assets/2_character_pepe/1_idle/idle/I-7.png',
        '../assets/2_character_pepe/1_idle/idle/I-8.png',
        '../assets/2_character_pepe/1_idle/idle/I-9.png',
        '../assets/2_character_pepe/1_idle/idle/I-10.png',
    ]

    IMAGES_SLEEPING = [
        '../assets/2_character_pepe/1_idle/long_idle/I-11.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-12.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-13.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-14.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-15.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-16.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-17.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-18.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-19.png',
        '../assets/2_character_pepe/1_idle/long_idle/I-20.png',
    ]

    IMAGES_WALKING = [
        '../assets/2_character_pepe/2_walk/W-21.png',
        '../assets/2_character_pepe/2_walk/W-22.png',
        '../assets/2_character_pepe/2_walk/W-23.png',
        '../assets/2_character_pepe/2_walk/W-24.png',
        '../assets/2_character_pepe/2_walk/W-25.png',
        '../assets/2_character_pepe/2_walk/W-26.png',
    ];

    world;

    constructor() {
        super().loadImage('../assets/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_SLEEPING);

        this.animate()
    }

    animate() {
        setInterval(() => {
            this.handleMovement();
        }, 1000 / 60);

        setInterval(() => {
            this.handleAnimation();
        }, 150);
    }

    //******************************//

    handleMovement() {
        this.handleMoveSideways();
    }

    handleMoveSideways() {
        if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
            this.resetMovementStop()
            this.moveRight();
        }
        if(this.world.keyboard.LEFT && this.x > 0){
            this.resetMovementStop()
            this.moveLeft(true);
        }
        this.world.camera_x = -this.x + 100;
    }

    //******************************//

    handleAnimation() {
        this.handleStandingAnimation();
        this.handleSleepingAnimation();
        this.handleWalkAnimation()
    }

    handleWalkAnimation() {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING)
        }
    }

    handleStandingAnimation() {
        if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            // this.setAnimationTime(800)
            this.setMovementStop()
            this.playAnimation(this.IMAGES_STANDING);
        }
    }

    handleSleepingAnimation() {
        const now = new Date().getTime();
        if((now - this.movementStop) >= 3000) this.playAnimation(this.IMAGES_SLEEPING);
    }

    setMovementStop() {
        if(!this.movementStop) this.movementStop = new Date().getTime();
    }

    resetMovementStop(){
        this.movementStop = null;
    }
}