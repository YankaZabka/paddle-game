import Paddle from './paddle'
import "./style.css"

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

const canvas = document.createElement("canvas")
canvas.setAttribute(`id`,`gameScreen`);
canvas.setAttribute(`width`,`${GAME_WIDTH}`);
canvas.setAttribute(`height`,`${GAME_HEIGHT}`);
document.body.appendChild(canvas)

const ctx = canvas.getContext("2d")




ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)

paddle.draw(ctx)