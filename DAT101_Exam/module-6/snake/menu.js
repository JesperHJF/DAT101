"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { GameProps, newGame, EGameStatus } from "./game.mjs";
//import { TSoundFile } from "libSound";

/* Use this file to create the menu for the snake game. */

const bgMusicMain = new Audio('./Media/bgMusicMain.mp3');
const bgMusicMenu = new Audio('./Media/bgMusicMenu.mp3');
const sfEat = new Audio('./Media/sfEat.mp3');
const sfDeath = new Audio('./Media/sfDeath.mp3');

const gameBorder = document.getElementById("gameBorder");
gameBorder.style.display = "none";
gameBorder.style.opacity = 0.8;

function showGameBorder() {
    if (gameBorder.style.display === "block") {
        gameBorder.style.display = "none";
    } else {
         gameBorder.style.display = "block";
    }
}


sfDeath.preload = true;
sfEat.preload = true;
bgMusicMain.preload = true;
bgMusicMenu.preload = true;

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
        // Play button
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.Play, 912/2-100, 684/2-100);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spPlayBtn.addEventListener("mouseenter", this.changeCursorPointer.bind(this));
        this.#spPlayBtn.hidden = false;

        // Game over sprite
        this.#spGameOver = new TSprite(aSpcvs, aSPI.GameOver, 28, 50);
        this.#spGameOver.hidden = true;

        // Restart button
        this.#spRestart = new TSpriteButton (aSpcvs, aSPI.Retry, 642, 398);
        this.#spRestart.addEventListener("click", this.spRestartClick.bind(this));
        this.#spRestart.addEventListener("mouseenter", this.changeCursorPointer.bind(this));
        this.#spRestart.hidden = true;
        
        // Home button
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
        
        this.#spGameScore1.scale = 0.6;
        this.#spGameScore2.scale = 0.6;
        this.#spGameScore3.scale = 0.6;

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

        // Resume button
        this.#spResumeBtn = new TSpriteButton(aSpcvs, aSPI.Resume, 912/2-100, 684/2-100);
        this.#spResumeBtn.addEventListener("click", this.spResumeBtnClick.bind(this));
        this.#spResumeBtn.addEventListener("mouseenter", this.changeCursorPointer.bind(this));
        this.#spResumeBtn.hidden = true;

        // Timer sprite
        this.#spTimer = new TSpriteNumber(aSpcvs, aSPI.Number, 830, 45);
        this.#spTimer.value = 9;
        this.#spTimer.visible = false;
        this.#spTimer.scale = 0.7;

        // Initial settings for music and sound effects
        bgMusicMenu.volume = 0;
        bgMusicMain.volume = 0.5;
        bgMusicMenu.loop = true;
        bgMusicMain.loop = true;
        sfEat.volume = 0.5;
        sfDeath.volume = 0.9;

    }

        

    switchBgMusic() {
        // Switch between menu and main background music with a fade effect
        // Added an offset to make the transition smoother
        bgMusicMain.preload = "auto";
        bgMusicMenu.preload = "auto";
            if (bgMusicMenu.volume === 0) {
            bgMusicMenu.volume = 0.5;
            bgMusicMain.volume = 0;
            bgMusicMenu.currentTime += 0.15;
        } else {
            bgMusicMenu.volume = 0;
            bgMusicMain.volume = 0.5;
            bgMusicMain.currentTime += 0.15;
        }
        
        console.log("Switched background music");
    }


    draw(){
    this.#spTimer.draw();
    this.#spGameScore1.draw();
    this.#spGameScore2.draw();
    this.#spGameScore3.draw();
    this.#spPlayBtn.draw();
    this.#spGameOver.draw();
    this.#spRestart.draw();
    this.#spHome.draw();
    this.#spFinalScore1.draw();
    this.#spFinalScore2.draw();
    this.#spFinalScore3.draw();
    this.#spResumeBtn.draw();
    
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

        showGameBorder();
        
        bgMusicMain.pause();
        bgMusicMenu.pause();
        bgMusicMain.play();
        bgMusicMenu.play();

        if (bgMusicMain.volume === 0) {
            this.switchBgMusic();
        }
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

        this.switchBgMusic();
    }

    spHomeClick(){
        console.log("Home click");
        GameProps.gameStatus = EGameStatus.Idle;

        this.#spGameScore1.visible = false;
        this.#spGameScore2.visible = false;
        this.#spGameScore3.visible = false;
        this.#spTimer.visible = false;
        this.#spGameOver.hidden = true;
        this.#spRestart.hidden = true;
        this.#spHome.hidden = true;
        this.#spPlayBtn.hidden = false;
        this.#spFinalScore1.visible = false;
        this.#spFinalScore2.visible = false;
        this.#spFinalScore3.visible = false;
        this.#spPlayBtn.disabled = false;

        showGameBorder();
    }

    snakeDead(){
        GameProps.gameStatus = EGameStatus.GameOver;
        this.#spGameOver.hidden = false;
        this.#spRestart.hidden = false;
        this.#spHome.hidden = false;
        this.#spFinalScore1.value = this.#spGameScore1.value;
        this.#spFinalScore1.visible = true;
        this.#spFinalScore2.value = this.#spGameScore2.value;
        this.#spFinalScore2.visible = true;
        this.#spFinalScore3.value = this.#spGameScore3.value;
        this.#spFinalScore3.visible = true;
        console.log("Snake is dead");
        
        sfDeath.play();
        sfEat.pause();
        this.switchBgMusic();
    }

    incGameScore(aScore){
        sfEat.pause(); // Restart the eat sound effect if it's already playing
        sfEat.play();

        for (let i = appleValue; i > 0; i--) {
            if (this.#spGameScore1.value < 9) {
                this.#spGameScore1.value += aScore;
            } else if (this.#spGameScore1.value === 9) {
                this.#spGameScore1.value = 0;
                if (this.#spGameScore2.value < 9) {
                    this.#spGameScore2.value++;
                }
                else if (this.#spGameScore2.value === 9) {
                    this.#spGameScore2.value = 0;
                    this.#spGameScore3.value++;
                }
            }
        }
    
        this.startTimer(); // Reset the timer when an apple is eaten
    
    }

    spResumeBtnClick(){
        //Pause or resume game
        
        if(GameProps.gameStatus === EGameStatus.Playing) {
            GameProps.gameStatus = EGameStatus.Pause;
            this.switchBgMusic();
            this.#spResumeBtn.hidden = false;
            this.#spResumeBtn.disabled = false;
        }else if(GameProps.gameStatus === EGameStatus.Pause) {
            GameProps.gameStatus = EGameStatus.Playing;
            this.switchBgMusic();
            this.#spResumeBtn.hidden = true;
            this.#spResumeBtn.disabled = true;
        }
    }

    changeCursorPointer(){
        // Change cursor to pointer when hovering over buttons
        cvs.style.cursor = "pointer";
    }


    
    animate() {
        const inIdle = EGameStatus.state === EGameStatus.idle;

        // Animate the play and resume buttons in the idle or paused state
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
        // The initial point value of an apple is 9, but it decreases by 1 every second
        this.#spTimer.value = 9;
        appleValue = 9;
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (GameProps.gameStatus === EGameStatus.Pause || GameProps.gameStatus === EGameStatus.GameOver) {
                return; // Do not decrease timer while game is paused
            }
            else {if (this.#spTimer.value > 1) {
                this.#spTimer.value--;
                appleValue--;
            } else {
                this.#spTimer.value = 0;
                appleValue = 0;
        }}
        
    }, 1000);
    }
}

