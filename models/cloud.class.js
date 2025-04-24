class Cloud extends MovableObject{

    y = 100;
    x = Math.random()*500;
    width = 400;
    height = 300;

    constructor(imagePath, minx, maxx) {
        super().loadImage(imagePath);
        this.x = Math.random() * (maxx - minx + 1) + minx;
        this.y = Math.random() * (100 - 20 + 1) + 20;
        
        this.animate()

    }

    animate() {
        setInterval(() => {
            this.moveLeft(false)
        }, 10)

        
    }
}