"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { GameProps, newGame, EGameStatus } from "./game.mjs";

/* Use this file to create the menu for the snake game. */

let appleValue = 1;
let timerInterval = null;

export class TMenu {
    #spPlayBtn;
    #spGameOver;
    #spRestart;
    #spHome;
    #spGameScore1;
    #spGameScore2;
    #spGameScore3;
    #spFinalScore1;
    #spFinalScore2;
    #spFinalScore3;
    #spResumeBtn;
    #spTimer;
    constructor (aSpcvs, aSPI) {
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.Play, 912/2-100, 684/2-100);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spPlayBtn.addEventListener("mouseenter", this.changeCursorPointer.bind(this));
        this.#spPlayBtn.hidden = false;
        this.#spGameOver = new TSprite(aSpcvs, aSPI.GameOver, 28, 50);
        this.#spRestart = new TSpriteButton (aSpcvs, aSPI.Retry, 642, 398);
        this.#spRestart.addEventListener("click", this.spRestartClick.bind(this));
        this.#spRestart.addEventListener("mouseenter", this.changeCursorPointer.bind(this));
        this.#spGameOver.hidden = true;
        this.#spRestart.hidden = true;
        this.#spHome = new TSpriteButton(aSpcvs, aSPI.Home, 92, 398);
        this.#spHome.addEventListener("click", this.spHomeClick.bind(this));
        this.#spHome.addEventListener("mouseenter", this.changeCursorPointer.bind(this));
        this.#spHome.hidden = true;

        // Game score sprites, 1 is the rightmost digit, 3 is the leftmost
        this.#spGameScore1 = new TSpriteNumber(aSpcvs, aSPI.Number, 130, 45);
        this.#spGameScore1.value = 0;
        this.#spGameScore1.visible = false;

        this.#spGameScore2 = new TSpriteNumber(aSpcvs, aSPI.Number, 80, 45);
        this.#spGameScore2.value = 0;
        this.#spGameScore2.visible = false;

        this.#spGameScore3 = new TSpriteNumber(aSpcvs, aSPI.Number, 30, 45);
        this.#spGameScore3.value = 0;
        this.#spGameScore3.visible = false;

        // Final score sprites, same as the game score
        this.#spFinalScore1 = new TSpriteNumber(aSpcvs, aSPI.Number, 626+80, 264);
        this.#spFinalScore1.visible = false;
        this.#spFinalScore1.value = 0;

        this.#spFinalScore2 = new TSpriteNumber(aSpcvs, aSPI.Number, 626, 264);
        this.#spFinalScore2.visible = false;
        this.#spFinalScore2.value = 0;

        this.#spFinalScore3 = new TSpriteNumber(aSpcvs, aSPI.Number, 626-80, 264);
        this.#spFinalScore3.visible = false;
        this.#spFinalScore3.value = 0;

        this.#spGameScore1.scale = 0.6;
        this.#spGameScore2.scale = 0.6;
        this.#spGameScore3.scale = 0.6;

        this.#spResumeBtn = new TSpriteButton(aSpcvs, aSPI.Resume, 912/2-100, 684/2-100);
        this.#spResumeBtn.addEventListener("click", this.spResumeBtnClick.bind(this));
        this.#spResumeBtn.addEventListener("mouseenter", this.changeCursorPointer.bind(this));
        this.#spResumeBtn.hidden = true;
        this.#spTimer = new TSpriteNumber(aSpcvs, aSPI.Number, 830, 45);
        this.#spTimer.value = 9;
        this.#spTimer.visible = false;
        this.#spTimer.scale = 0.7;
    }


    draw(){
    this.#spPlayBtn.draw();
    this.#spGameOver.draw();
    this.#spRestart.draw();
    this.#spHome.draw();
    this.#spGameScore1.draw();
    this.#spGameScore2.draw();
    this.#spGameScore3.draw();
    this.#spFinalScore1.draw();
    this.#spFinalScore2.draw();
    this.#spFinalScore3.draw();
    this.#spResumeBtn.draw();
    this.#spTimer.draw();
    }

    spPlayBtnClick(){
        console.log("Start game");
        GameProps.gameStatus = EGameStatus.Playing;
        newGame();
        this.#spPlayBtn.hidden = true;
        this.#spGameScore1.visible = true;
        this.#spGameScore1.value = 0;
        this.#spGameScore2.visible = true;
        this.#spGameScore2.value = 0;
        this.#spGameScore3.visible = true;
        this.#spGameScore3.value = 0;
        this.#spPlayBtn.disabled = true;
        this.#spTimer.visible = true;
        this.startTimer();
        //console.log(EGameStatus.state);
    }

    spRestartClick(){
        console.log("Restart game");
        GameProps.gameStatus = EGameStatus.Playing;
        newGame();
        this.#spGameOver.hidden = true;
        this.#spRestart.hidden = true;
        this.#spHome.hidden = true;
        this.#spGameScore1.visible = true;
        this.#spGameScore1.value = 0;
        this.#spGameScore2.visible = true;
        this.#spGameScore2.value = 0;
        this.#spGameScore3.visible = true;
        this.#spGameScore3.value = 0;
        this.#spFinalScore1.visible = false;
        this.#spFinalScore2.visible = false;
        this.#spFinalScore3.visible = false;
        this.#spTimer.visible = true;
        this.startTimer();
        //console.log(EGameStatus.state);
    }

    spHomeClick(){
        console.log("Home click");
        GameProps.gameStatus = EGameStatus.Idle;
        this.#spGameOver.hidden = true;
        this.#spRestart.hidden = true;
        this.#spHome.hidden = true;
        this.#spPlayBtn.hidden = false;
        this.#spFinalScore1.visible = false;
        this.#spFinalScore2.visible = false;
        this.#spFinalScore3.visible = false;
        this.#spPlayBtn.disabled = false;
    }

    snakeDead(){
        GameProps.gameStatus = EGameStatus.GameOver;
        this.#spGameOver.hidden = false;
        this.#spRestart.hidden = false;
        this.#spHome.hidden = false;
        this.#spGameScore1.visible = false;
        this.#spGameScore2.visible = false;
        this.#spGameScore3.visible = false;
        this.#spFinalScore1.value = this.#spGameScore1.value;
        this.#spFinalScore1.visible = true;
        this.#spFinalScore2.value = this.#spGameScore2.value;
        this.#spFinalScore2.visible = true;
        this.#spFinalScore3.value = this.#spGameScore3.value;
        this.#spFinalScore3.visible = true;
        this.#spTimer.visible = false;
        console.log("Snake is dead");
    }

    incGameScore(aScore){
       // Score does not go above 99, please fix
        for (let i = appleValue; i > 0; i--) {
       if (this.#spGameScore1.value < 9) {
        this.#spGameScore1.value += aScore;
    } else if (this.#spGameScore1.value === 9) {
        this.#spGameScore1.value = 0;
        if (this.#spGameScore2.value < 9) {
            this.#spGameScore2.value++;
        }
        }
    }
        this.startTimer(); // Reset the timer when an apple is eaten
    
    }

    spResumeBtnClick(){
        //Pause or resume game
        if(GameProps.gameStatus === EGameStatus.Playing) {
            GameProps.gameStatus = EGameStatus.Pause;
            this.#spResumeBtn.hidden = false;
            this.#spResumeBtn.disabled = false;
        }else if(GameProps.gameStatus === EGameStatus.Pause) {
            GameProps.gameStatus = EGameStatus.Playing;
            this.#spResumeBtn.hidden = true;
            this.#spResumeBtn.disabled = true;
        }
    }

    changeCursorPointer(){
        console.log("Change cursor to pointer");
        cvs.style.cursor = "pointer";
    }


    
    animate() {
        const inIdle = EGameStatus.state === EGameStatus.idle;
        let i = 0;
        setInterval(() => {
        if (i >8) {i = 0}
        else {i++}
        this.#spPlayBtn.index = i;
        this.#spPlayBtn.draw();
        this.#spResumeBtn.index = i;
        this.#spResumeBtn.draw();
    }, 125);
    }

    startTimer() {
        this.#spTimer.value = 9;
        appleValue = 9;
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
        if (this.#spTimer.value > 1) {
            this.#spTimer.value--;
            appleValue--;
        } else {
            this.#spTimer.value = 0;
            appleValue = 0;
        }
    }, 1000);
    }
}

