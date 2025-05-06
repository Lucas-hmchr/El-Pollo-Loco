class Bottle extends DrawableObject{

    y = 350;
    x = Math.random()*500;
    width = 75;
    height = 75;
    id = Date.now()

    offset = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
    }

    constructor(imagePath, minx, maxx) {
        super().loadImage(imagePath);
        this.x = Math.random() * (maxx - minx + 1) + minx;        
    }

}