"use strict"
import {printOut} from "../../common/script/utils.mjs";
let userInput1 = document.getElementById("inputAge1");
let userInput2 = document.getElementById("inputAge2");
let age1 = 0;
let age2 = 0;

let textOutput = document.getElementById("txtOut");

        const adultLimit = 18;
        const ageMovieLimit = 15;

document.getElementById("cmbOK").addEventListener("click",
    (aEvent => {
        age1 = parseInt(userInput1.value);
        age2 = parseInt(userInput2.value);

        const compareResult = (age1 >= ageMovieLimit);
        if (compareResult) {
            printOut("Person 1 can go to the movie.");
        }
        else {
            printOut("Person 1 cannot go to the movie.");
        }

          const compareResult2 = (age2 >= ageMovieLimit);
        if (compareResult2) {
            printOut("Person 2 can go to the movie.");
        }
        else {
            printOut("Person 2 cannot go to the movie.");
        }




        //setTimeout(() => {
        printOut(age1);
        printOut(age2);
      //  }, 2000);

    }));

    document.getElementById("colorsBtn").addEventListener("click",
    (aEvent => {
        let waitTime = 350;

        function colorChange() {
        textOutput.style.color = "red";
        setTimeout(() => {
        textOutput.style.color = "grey";
        }, waitTime * 1);
        setTimeout(() => {
        textOutput.style.color = "red";
        }, waitTime * 2);
        setTimeout(() => {
          textOutput.style.color = "grey";
        }, waitTime * 3);
        
        // 1. Declare a variable to hold the interval ID, ensuring it has adequate scope
let intervalId = null;

function startInterval() {
    // Check if an interval is already running
    if (intervalId !== null) {
        console.log("Interval already running.");
        return;
    }

    // 2. Start the interval and store the returned ID
    intervalId = setInterval(changeColor, waitTime * 4);
    console.log("Interval started with ID: " + intervalId);
}

function stopInterval() {
    // 3. Stop the interval using the stored ID
    clearInterval(intervalId);
    console.log("Interval stopped.");

    // Optional: Reset the variable after clearing the interval
    intervalId = null;
}
startInterval();
for (let i = 0; i < 3; i++) {
    console.log("Color change cycle " + (i + 1));
}
if (i > 2) {
    stopInterval();
}
    }}));
   

    
