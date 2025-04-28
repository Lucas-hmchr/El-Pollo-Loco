class Character extends MovableObject {

    y = 85;//85
    x = 50;
    height = 350;
    width = 180;
    speed = 10;
    movementStop;

    offset = {
        top: 120,
        bottom: 30,
        left: 40,
        right: 30,
    }

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

    IMAGES_JUMPING = [
        '../assets/2_character_pepe/3_jump/J-31.png',
        '../assets/2_character_pepe/3_jump/J-32.png',
        '../assets/2_character_pepe/3_jump/J-33.png',
        '../assets/2_character_pepe/3_jump/J-34.png',
        '../assets/2_character_pepe/3_jump/J-35.png',
        '../assets/2_character_pepe/3_jump/J-36.png',
        '../assets/2_character_pepe/3_jump/J-37.png',
        '../assets/2_character_pepe/3_jump/J-38.png',
        '../assets/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_HURTING = [
        '../assets/2_character_pepe/4_hurt/H-41.png',
        '../assets/2_character_pepe/4_hurt/H-42.png',
        '../assets/2_character_pepe/4_hurt/H-43.png',
    ];

    IMAGES_DEAD = [
        '../assets/2_character_pepe/5_dead/D-51.png',
        '../assets/2_character_pepe/5_dead/D-52.png',
        '../assets/2_character_pepe/5_dead/D-53.png',
        '../assets/2_character_pepe/5_dead/D-54.png',
        '../assets/2_character_pepe/5_dead/D-55.png',
        '../assets/2_character_pepe/5_dead/D-56.png',
        '../assets/2_character_pepe/5_dead/D-57.png',
    ];

    world;

    constructor() {
        super().loadImage('../assets/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity()

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
        this.handleJump();
    }

    handleMoveSideways() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.resetMovementStop()
            this.moveRight();
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.resetMovementStop()
            this.moveLeft(true);
        }
        this.world.camera_x = -this.x + 100;
    }

    handleJump() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) this.jump()
    }

    //******************************//

    handleAnimation() {
        this.handleStandingAnimation();
        this.handleSleepingAnimation();
        this.handleWalkAnimation();
        this.handleJumpAnimation()
        this.handleHurtAnimation();
        this.handleDeathAnimation();
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
        if ((now - this.movementStop) >= 3000) this.playAnimation(this.IMAGES_SLEEPING);
    }

    handleJumpAnimation() {
        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING)
        }
    }

    handleHurtAnimation() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURTING);            
        }
    }

    handleDeathAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        }      
    }

    setMovementStop() {
        if (!this.movementStop) this.movementStop = new Date().getTime();
    }

    resetMovementStop() {
        this.movementStop = null;
    }

    hurtCharacter() {
        this.applyDamage();
    }

    // killCharacter() {
    //     this.handleDeathAnimation();
    //     console.log('tot')
    // }


}