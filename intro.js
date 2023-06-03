class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    create() {
        this.input.on('pointerdown', () => {
            this.scene.start('npcScreen')
        });
    }
}