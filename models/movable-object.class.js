class MovableObject {
    x = 100;
    y = 300;
    img;
    height = 150;
    width = 100;

    imageCache = {};

    
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache.path = path; 
        });

    }

    moveRight() {
        console.log('Moving Right')
    }

    
    moveLeft(){
        
    }


}