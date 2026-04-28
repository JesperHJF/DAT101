"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { GameProps, newGame, EGameStatus } from "./game.mjs";

/* Use this file to create the menu for the snake game. */

export class TMenu {
    #spPlayBtn;
    #spGameOver;
    #spRestart;
    #spHome;
    #spGameScore;
    #spFinalScore;
    constructor (aSpcvs, aSPI) {
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.Play, 912/2-100, 684/2-100);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spPlayBtn.hidden = false;
        this.#spGameOver = new TSprite(aSpcvs, aSPI.GameOver, 28, 50);
        this.#spRestart = new TSpriteButton (aSpcvs, aSPI.Retry, 642, 398);
        this.#spRestart.addEventListener("click", this.spRestartClick.bind(this));
        this.#spGameOver.hidden = true;
        this.#spRestart.hidden = true;
        this.#spHome = new TSpriteButton(aSpcvs, aSPI.Home, 92, 398);
        this.#spHome.addEventListener("click", this.spHomeClick.bind(this));
        this.#spHome.hidden = true;
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.Number, 30, 30);
        this.#spGameScore.value = 0;
        this.#spGameScore.visible = false;
        this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.Number, 626, 264);
        this.#spFinalScore.visible = false;
        this.#spFinalScore.value = 0;
    }


    draw(){
    this.#spPlayBtn.draw();
    this.#spGameOver.draw();
    this.#spRestart.draw();
    this.#spHome.draw();
    this.#spGameScore.draw();
    this.#spFinalScore.draw();
    }

    spPlayBtnClick(){
        console.log("Start game");
        GameProps.gameStatus = EGameStatus.Playing;
        newGame();
        this.#spPlayBtn.hidden = true;
        this.#spGameScore.visible = true;
        this.#spGameScore.value = 0;
        //console.log(EGameStatus.state);
    }

    spRestartClick(){
        console.log("Restart game");
        GameProps.gameStatus = EGameStatus.Playing;
        newGame();
        this.#spGameOver.hidden = true;
        this.#spRestart.hidden = true;
        this.#spHome.hidden = true;
        this.#spGameScore.visible = true;
        this.#spGameScore.value = 0;
        this.#spFinalScore.visible = false;
        //console.log(EGameStatus.state);
    }

    spHomeClick(){
        console.log("Home click");
        GameProps.gameStatus = EGameStatus.Idle;
        this.#spGameOver.hidden = true;
        this.#spRestart.hidden = true;
        this.#spHome.hidden = true;
        this.#spPlayBtn.hidden = false;
        this.#spFinalScore.visible = false;
    }

    snakeDead(){
        GameProps.gameStatus = EGameStatus.GameOver;
        this.#spGameOver.hidden = false;
        this.#spRestart.hidden = false;
        this.#spHome.hidden = false;
        this.#spGameScore.visible = false;
        this.#spFinalScore.value = this.#spGameScore.value;
        this.#spFinalScore.visible = true;
        console.log("Snake is dead");
    }

    incGameScore(aScore){
        this.#spGameScore.value += aScore;
        console.log(this.#spGameScore.value);
  }

    
    
    animate() {
        const inIdle = EGameStatus.state === EGameStatus.idle;   
    }
}

