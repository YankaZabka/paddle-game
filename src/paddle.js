export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150
        this.height = 25

        this.maxSpeed = 6
        this.speed = 0

        this.gameWidth = gameWidth

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }f

    moveRight() {
        this.speed = this.maxSpeed
    }

    stop() {
        this.speed = 0
    }

    draw(ctx) {
        ctx.fillStyle = "#00A0F9"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime) {
        if (!deltaTime) return

        if (this.position.x < 0) this.position.x = 0
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width

        this.position.x += this.speed
    }
}