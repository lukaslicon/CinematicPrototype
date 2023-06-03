class outro extends Phaser.Scene {
    constructor() {
        super('outro')
    }

    create() {

        this.input.on('pointerdown', () => {
            this.scene.start('intro')
        });
    }
}