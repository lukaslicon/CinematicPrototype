class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    create() {
        this.add.image(960,540 , 'background');
        this.player = this.physics.add.image(960, 590, 'player').setScale(1.5).setBounce(.6, .6);
        this.player.body.setCollideWorldBounds(true); 

        
        // Add a click (or touch) event listener to the scene
        this.input.on('pointerdown', (pointer) => {
            this.physics.moveTo(this.player, pointer.x, pointer.y, 300);
                // Save destination coordinates
                this.targetX = pointer.x;
                this.targetY = pointer.y;
        });
    }

    update() {
        // If player is close to destination, stop the player
        if (Phaser.Math.Distance.Between(this.player.x, this.player.y, this.targetX, this.targetY) < 10) {
            this.player.body.setVelocity(0);
        }
    }
}