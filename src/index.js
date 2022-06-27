import Paddle from './paddle'
import InputHandler  from "./input";
import "./style.css"
import BallIcon from "../assets/ball.png"

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

const BALL_WIDTH = 40
const BALL_HEIGHT = 40

const canvas = document.createElement("canvas")
canvas.setAttribute(`id`,`gameScreen`);
canvas.setAttribute(`width`,`${GAME_WIDTH}`);
canvas.setAttribute(`height`,`${GAME_HEIGHT}`);
document.body.appendChild(canvas)

const ballImg = document.createElement("img")
ballImg.setAttribute("id", "img_ball")
ballImg.setAttribute("src", BallIcon)
ballImg.setAttribute(`width`,`${BALL_WIDTH}`);
ballImg.setAttribute(`height`,`${BALL_HEIGHT}`);
document.body.appendChild(ballImg)

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