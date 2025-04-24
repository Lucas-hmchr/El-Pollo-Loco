class Cloud extends MovableObject{

    y = 100;
    x = Math.random()*500;
    width = 400;
    height = 300;

    constructor() {
        super().loadImage('../assets/5_background/layers/4_clouds/1.png');
        this.animate()

    }

    animate() {
        this.moveLeft()
        
    }
}