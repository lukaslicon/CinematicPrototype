class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    create() {
        this.add.image(960,540 , 'background');
        this.player = this.physics.add.image(960, 590, 'player').setScale(1.5).setBounce(.6, .6);
        this.player.body.setCollideWorldBounds(true); 

    }
}