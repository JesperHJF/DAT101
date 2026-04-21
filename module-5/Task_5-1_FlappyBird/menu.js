"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, aIsMuted, EGameStatus, restartGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

export const fnCountDown = "./Media/countDown.mp3";
export const fnRunning = "./Media/running.mp3";

//aIsMuted.addEventListener("change", setSoundMute);


export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGetReady;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spTitle.hidden = false;
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 280);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 190, 100);
    this.#spGetReady.index = 0;
    this.#spGetReady.hidden = true;
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.visible = false;

    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 180, 150);
    this.#spGameOver.hidden = true;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 207, 193, 0);
    this.#spMedal.hidden = true;

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 275, 165);
    this.#spFinalScore.visible = false;
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 275, 215);
    this.#spHighScore.visible = false;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGetReady.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spTitle.hidden = true;
      if (!aIsMuted) {
        this.#sfRunning = new TSoundFile(fnRunning);
        this.#sfRunning.play();
      }
      this.#spGetReady.hidden = true;
      this.#spGameScore.visible = true;
      startGame();
    }
    
  }

  spPlayBtnClick(){
    console.log("Click!");
    restartGame();
    EGameStatus.state = EGameStatus.countDown;
    this.#spPlayBtn.hidden = true;
    this.#spCountDown.visible = true;
    this.#spTitle.hidden = true;
    this.#spGetReady.hidden = false;
    this.#spCountDown.value = 3;
    this.#spGameOver.hidden = true;
    this.#spMedal.hidden = true;
    this.#spFinalScore.visible = false;
    this.#spHighScore.visible = false;
    if (aIsMuted) {
      console.log("Sound is muted, not playing countdown");
    } else {
      console.log("Playing countdown sound");
      this.#sfCountDown = new TSoundFile(fnCountDown);
      this.#sfCountDown.play();
    }
    
    setTimeout(this.countDown.bind(this), 1000);
  }

  
  setSoundMute(aIsMuted) {
  if(aIsMuted){
    this.#sfRunning.pause();
  }
  else if (aIsMuted === false && EGameStatus.state === EGameStatus.gaming){
    this.#sfRunning.play();
  }
  }

  compareScores(){
    const finalScore = this.#spGameScore.value;
    this.#spFinalScore.value = finalScore;
    const highScore = localStorage.getItem("flappyBirdHighScore") || 0;
    if(finalScore > highScore){
      localStorage.setItem("flappyBirdHighScore", finalScore);
      this.#spHighScore.value = finalScore;
    }else{
      this.#spHighScore.value = highScore;
    }
   
  }

  medalLogic(){
    // 0 = No medal, 1 = Bronze, 2 = Silver, 3 = Gold
    if (this.#spGameScore.value >= 3){
      this.#spMedal.index = 2;
    } else if (this.#spGameScore.value == 2){
      this.#spMedal.index = 1;
    } else if (this.#spGameScore.value == 1){
      this.#spMedal.index = 3;
    } else {
      this.#spMedal.index = 0;
    }
  }

  showGameOver(){
    this.compareScores();
    this.medalLogic();

    this.#spGameScore.value = 0;
    this.#spGameScore.visible = false;

    this.#spGameOver.hidden = false;
    this.#spMedal.hidden = false;
    this.#spFinalScore.visible = true;
    this.#spHighScore.visible = true;

    this.#spPlayBtn.hidden = false;
  }
}


