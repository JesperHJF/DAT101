"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { GameProps, newGame, EGameStatus } from "./game.mjs";

/* Use this file to create the menu for the snake game. */

export class TMenu {
    #spPlayBtn;
    #spPlayBtnClick;
    #spGameScore;
    #spFinalScore;
    #spGameOver;
    #spRestart;
    #spHome;
    constructor (aSpcvs, aSPI) {
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.Play, 912/2-100, 684/2-100);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spPlayBtn.hidden = false;
    }

    draw(){
    this.#spPlayBtn.draw();
    }

    spPlayBtnClick(){
        console.log("Start game");
        EGameStatus.state = EGameStatus.Playing;
        newGame();
        this.#spPlayBtn.hidden = true;
        //console.log(EGameStatus.state);
    }
    animate() {
        const inIdle = EGameStatus.state === EGameStatus.idle;   
    }
}

