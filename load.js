class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/images/';
        this.load.image('background', 'map.png');

    }
    create()
    {
        this.scene.start('MiniGame');
    }
}

let gameOptions = {
    initialTime: 60
}