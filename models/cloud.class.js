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
        setInterval(() => {
            this.x -= 0.2;
        }, 1000 / 60)
        
    }
}