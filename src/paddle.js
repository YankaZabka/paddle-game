export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150
        this.height = 25

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    draw(ctx) {
        ctx.fillStyle = "#00A0F9"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}