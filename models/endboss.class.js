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

    world;

    isAttacking;
    isWalking;

    IMAGES_WALK = [
        '../assets/4_enemie_boss_chicken/1_walk/G1.png',
        '../assets/4_enemie_boss_chicken/1_walk/G2.png',
        '../assets/4_enemie_boss_chicken/1_walk/G3.png',
        '../assets/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    IMAGES_ALERT = [
        '../assets/4_enemie_boss_chicken/2_alert/G5.png',
        '../assets/4_enemie_boss_chicken/2_alert/G6.png',
        '../assets/4_enemie_boss_chicken/2_alert/G7.png',
        '../assets/4_enemie_boss_chicken/2_alert/G8.png',
        '../assets/4_enemie_boss_chicken/2_alert/G9.png',
        '../assets/4_enemie_boss_chicken/2_alert/G10.png',
        '../assets/4_enemie_boss_chicken/2_alert/G11.png',
        '../assets/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_ATTACK = [
        '../assets/4_enemie_boss_chicken/3_attack/G13.png',
        '../assets/4_enemie_boss_chicken/3_attack/G14.png',
        '../assets/4_enemie_boss_chicken/3_attack/G15.png',
        '../assets/4_enemie_boss_chicken/3_attack/G16.png',
        '../assets/4_enemie_boss_chicken/3_attack/G17.png',
        '../assets/4_enemie_boss_chicken/3_attack/G18.png',
        '../assets/4_enemie_boss_chicken/3_attack/G19.png',
        '../assets/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        '../assets/4_enemie_boss_chicken/4_hurt/G21.png',
        '../assets/4_enemie_boss_chicken/4_hurt/G22.png',
        '../assets/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD = [
        '../assets/4_enemie_boss_chicken/5_dead/G24.png',
        '../assets/4_enemie_boss_chicken/5_dead/G25.png',
        '../assets/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_WALK)
        this.loadImages(this.IMAGES_ALERT)
        this.loadImages(this.IMAGES_ATTACK)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_DEAD)
        this.speed = 5;
        this.x = 2000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.handleAnimation();
        }, 200);
    }

    handleAnimation() {
        this.handleStandingAnimation();
        this.handleAttackingAnimation();
    }

    handleStandingAnimation() {
        if (this.x === 2000) {
            this.playAnimation(this.IMAGES_ALERT);
        }
    }

    handleWalkAnimation() {
        if (this.isWalking) {
                this.playAnimation(this.IMAGES_WALK)
        }
    }

    handleAttackingAnimation() {
        if (this.isAttacking) {
            this.playAnimation(this.IMAGES_ATTACK)
        }
    }

    startWalking() {
        this.isWalking = true;
        setInterval(() => {
            if (this.distance() >= 100) {
                this.moveRight();
                this.otherDirection = true;
            } else if (this.distance() <= -100) {
                this.moveLeft(false);
            }
        }, 1000);
    }

    distance() {
        return this.world.character.x - this.x
    }

    // animate() {
    //     if (this.isDead()) {

    //     } else {
    //         setInterval(() => {
    //             this.handleMovement();
    //         }, 1000/60)

    //         setInterval(() => {
    //             this.handleAnimation();
    //         }, 200)  
    //     }
    // }

    // handleMovement() {
    //     if(!this.isDead()) this.moveLeft(false);
    // }

    // handleAnimation() {
    //     this.isDead() ? this.loadImage('../assets/3_enemies_chicken/chicken_normal/2_dead/dead.png') : this.playAnimation(this.IMAGES_WALKING);
    //     if(this.isDead()) this.removeBody();
    // }
}