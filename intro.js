class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    create() {
        this.add.image(960,540 , 'summaryScreen');
        this.add.text(725,850, "Click anywhere to begin.").setFontSize(30).setFill('#f0000f');

    }
}