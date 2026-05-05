"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSpriteCanvas } from "libSprite";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.js";
import { TSnake, EDirection } from "./snake.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";

//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };

let appleValue = 1; //Add higher value with time variable later





// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null
};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position
  
  // Reset game speed
  gameSpeed = 4; 
  hndUpdateGame = clearInterval(hndUpdateGame);
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
}

export function baitIsEaten() {

  console.log("Bait eaten!");
  /* Logic to increase the snake size and score when bait is eaten */
  GameProps.menu.incGameScore(appleValue);
  GameProps.bait.update();
  GameProps.snake.grow(); //Not a function? Finn ut av hvordan gjøre slangen lengre

  increaseGameSpeed(); // Increase game speed
}



//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // change game status to Idle
  
  /* Create the game menu here */ 
  GameProps.menu = new TMenu(spcvs, SheetData);
  GameProps.menu.animate();
  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!" + cvs.width + " " + cvs.height);
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed
  console.log("Game canvas is updating!");
}

function drawGame() {
  // Clear the canvas
  spcvs.clearCanvas();
  switch (GameProps.gameStatus) {
    case EGameStatus.Idle:
      GameProps.menu.draw();
      break;
    case EGameStatus.Playing:
      GameProps.menu.draw();
      GameProps.snake.draw();
      GameProps.bait.draw();
      break;
    case EGameStatus.Pause:
      GameProps.bait.draw();
      GameProps.snake.draw();
      GameProps.menu.draw();
      break;
    case EGameStatus.GameOver:
      GameProps.snake.draw();
      GameProps.bait.draw();
      GameProps.menu.draw();
      break;

    
    
  }
  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:

      if (!GameProps.snake.update()) {
        console.log("Game over!");
        GameProps.menu.snakeDead();
      }
      break;
  }
}

function increaseGameSpeed() {
  hndUpdateGame = clearInterval(hndUpdateGame); // Clear the existing interval
  gameSpeed+=0.10;
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Set a new interval with the updated game speed
  console.log("Increased game speed to " + gameSpeed);
}


//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      break;
    case "w":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "s":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "a":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "d":
      GameProps.snake.setDirection(EDirection.Right);
      break;
    case " ":
      console.log("Space key pressed!");
      /* Pause the game logic here */
      GameProps.menu.spResumeBtnClick();// Toggle game paused state
      break;
    default:
      console.log(`Key pressed: "${event.key}"`);
  }
}
//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteImage("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
