
let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true,
            debugShowVelocity: false
    }
},
scene: [load, intro, npcScreen, outro],
title: "Mini Game Prototype",
};

let game = new Phaser.Game(config);
