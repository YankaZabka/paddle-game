import Paddle from './paddle'
import InputHandler  from "./input";
import "./style.css"

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

const canvas = document.createElement("canvas")
canvas.setAttribute(`id`,`gameScreen`);
canvas.setAttribute(`width`,`${GAME_WIDTH}`);
canvas.setAttribute(`height`,`${GAME_HEIGHT}`);
document.body.appendChild(canvas)

const ctx = canvas.getContext("2d")

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)

new InputHandler(paddle)

paddle.draw(ctx)

let lastTime = 0


function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    paddle.update(deltaTime)
    paddle.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop()