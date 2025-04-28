class StatusBar extends DrawableObject {

    IMAGES = [
        '../assets/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        '../assets/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        '../assets/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        '../assets/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        '../assets/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        '../assets/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ]

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex(this.percentage)];
        console.log(path)
        this.img = this.imageCache[path];
    }

    resolveImageIndex(percentage) {
        if(percentage == 100) {
            return 5;
        } else if(percentage > 80){
            return 4;
        } else if(percentage > 60){
            return 3;
        } else if(percentage > 40){
            return 2;
        } else if(percentage > 20){
            return 1;
        } else if(percentage >= 0){
            return 0;
        }
    }
}