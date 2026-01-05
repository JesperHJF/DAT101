"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/

/*let i, CountGoal = 10, x = ""; for (i = 1; i <= CountGoal; i++) {x += i;}
let i2, y = ""; for (i2 = CountGoal; i2 >= 1; i2--) {y += i2;} x += newLine + y; printOut(x + newLine);*/

for (let i = 1, CountGoal = 10, x = ""; i <= CountGoal; i++) {x += i;
    if (i === CountGoal) {
        let i2, y = ""; for (i2 = CountGoal; i2 >= 1; i2--) {y += i2;} x += newLine + y; printOut(x + newLine);
    }
}
printOut("--- Part 2, 3 ----------------------------------------------------------------------------------------------");
/* Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/

let guessAnswer = 15;
//guessAnswer = Math.floor(Math.random() * 60) + 1;

let timeStart = Date.now();

let guess = 0;
let guessCount = 0;
while (guess !== guessAnswer) {
  guess = Math.floor(Math.random() * 1000000) + 1;
  guessCount++;
}
printOut("The while loop spent " + (Date.now() - timeStart) + " milliseconds, and guessed " + guessCount + " times before correctly guessing the number " + guess);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI).*/

let lineBreaker = 0;
let stringBuilder = "";
for (let number = 2; number < 200; number++){
    let isPrime = true;

    let factor = 2; 
    while (factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            isPrime = false; 
            break; 
        }
        factor++; 
    }
    if (isPrime) {
        stringBuilder += number.toString() + ", ";
        lineBreaker++;
    }
    if (lineBreaker >= 25) {
        stringBuilder += newLine;
        lineBreaker = 0;
    }
}
if (stringBuilder != "") {
    stringBuilder = stringBuilder.substring(0, stringBuilder.length - 2);
}
printOut(stringBuilder);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops. The output should look like this:
K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7*/


for (let rows = 1; rows <= 7; rows++) {
    let rowPrint = "";
    for (let col = 1; col <= 9; col++) {
        rowPrint += "K" + col + "R" + rows + " ";
    }
    printOut(rowPrint);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

let studentName;
for (let student = 1; student <= 5; student++) {

    if (student === 1) {studentName = "Stian";}
    else if (student === 2) {studentName = "Veronica";}
    else if (student === 3) {studentName = "Harald";}
    else if (student === 4) {studentName = "Ingrid";}
    else if (student === 5) {studentName = "Ben";}

let grade = Math.floor(Math.random() * 236)+ 1;
let percentage = (grade / 236) * 100;

let letterGrade;
if (percentage >= 89) {
    letterGrade = 'A';
} else if (percentage >= 77) {
    letterGrade = 'B';
} else if (percentage >= 65) {
    letterGrade = 'C';
} else if (percentage >= 53) {
    letterGrade = 'D';
} else if (percentage >= 41) {
    letterGrade = 'E';
} else {
    letterGrade = 'F';
}

printOut(studentName + " scored " + grade + " points (" + percentage.toFixed(2)+ "%) and received a grade of " + letterGrade);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

for (let throws = 1, fullStraight = false; fullStraight === false; throws++) {
    let d1 = Math.ceil(Math.random() * 6);
    let d2 = Math.ceil(Math.random() * 6);
    let d3 = Math.ceil(Math.random() * 6);
    let d4 = Math.ceil(Math.random() * 6);
    let d5 = Math.ceil(Math.random() * 6);
    let d6 = Math.ceil(Math.random() * 6);

let target = 1;
let straight1 = d1 == target || d2 == target || d3 == target || d4 == target || d5 == target || d6 == target;
target++;
let straight2 = d1 == target || d2 == target || d3 == target || d4 == target || d5 == target || d6 == target;
target++;
let straight3 = d1 == target || d2 == target || d3 == target || d4 == target || d5 == target || d6 == target;
target++;
let straight4 = d1 == target || d2 == target || d3 == target || d4 == target || d5 == target || d6 == target;
target++;
let straight5 = d1 == target || d2 == target || d3 == target || d4 == target || d5 == target || d6 == target;
target++;
let straight6 = d1 == target || d2 == target || d3 == target || d4 == target || d5 == target || d6 == target;

if (straight1 && straight2 && straight3 && straight4 && straight5 && straight6 ){
    printOut("Straight achieved after " + throws + " throws!");
    printOut("Dice rolls: " + d1 + ", " + d2 + ", " + d3 + ", " + d4 + ", " + d5 + ", " + d6);
    fullStraight = true;
}
}

printOut(newLine);



for (let throws = 1, threePairs = false; threePairs === false; throws++) {
    const d = [];
    for (let i = 0; i < 6; i++) {
        d[i] = Math.ceil(Math.random() * 6);
    }

    const counts = {};
    for (let i = 0; i < 6; i++) {
        counts[d[i]] = (counts[d[i]] || 0) + 1;
    }
   
    let pairsOfTwo = 0;
    for (let face in counts) {
        if (counts[face] === 2) {
            pairsOfTwo++;
        }
    }
    if (pairsOfTwo === 3) {
        printOut("Three pairs achieved after " + throws + " throws!");
        printOut("Dice rolls: " + d[0] + ", " + d[1] + ", " + d[2] + ", " + d[3] + ", " + d[4] + ", " + d[5]);
        threePairs = true;
    }
}

printOut(newLine);

let tower = false;
for (let throws = 1, tower = false; tower === false; throws++) {
    const d = [];
    for (let i = 0; i < 6; i++) {
        d[i] = Math.ceil(Math.random() * 6);
    }
    
    const counts = {};
    for (let i = 0; i < 6; i++) {
        counts[d[i]] = (counts[d[i]] || 0) + 1;
    }
 
    let twoOfAKind = false;
    let fourOfAKind = false;
    for (let face in counts) {
        if (counts[face] === 2) {
            twoOfAKind = true;
        }
        if (counts[face] === 4) {
            fourOfAKind = true;
        }
    }
    if (twoOfAKind && fourOfAKind) {
        printOut("Tower achieved after " + throws + " throws!");
        printOut("Dice rolls: " + d[0] + ", " + d[1] + ", " + d[2] + ", " + d[3] + ", " + d[4] + ", " + d[5]);
        tower = true;
    }
}

printOut(newLine);

for (let throws = 1, Yahtzee = false; Yahtzee === false; throws++) {
    let d1 = Math.ceil(Math.random() * 6);
    let d2 = Math.ceil(Math.random() * 6);
    let d3 = Math.ceil(Math.random() * 6);
    let d4 = Math.ceil(Math.random() * 6);
    let d5 = Math.ceil(Math.random() * 6);
    let d6 = Math.ceil(Math.random() * 6);
if (d1 === d2 && d2 === d3 && d3 === d4 && d4 === d5 && d5 === d6) {
        printOut("Yahtzee achieved after " + throws + " throws!");
        printOut("Dice rolls: " + d1 + ", " + d2 + ", " + d3 + ", " + d4 + ", " + d5 + ", " + d6);
        Yahtzee = true;
    }
}

printOut(newLine);




/*1. In part 1, is it possible to solve the problem using a single "for" loop?
Yes, it's possible to achieve the correct result using a single "for" loop by keeping track of the counts of each die face in an array and checking for the winning conditions within the same loop.

2. In part 2, can we create what is known as an "infinite" loop within the condition of the "while" loop?
Describe what would or would not be necessary to achieve this. Provide a thorough explanation of
your answer.
Yes, it is possible to create an "infinite" loop within the condition of a "while" loop by using a condition that always evaluates to true, such as "while (true)". However, to avoid an actual infinite loop that never terminates, we would need to include a break statement or some other exit condition within the loop body that allows us to exit the loop when a certain condition is met. This way, while the loop condition itself is infinite, the loop can still terminate based on internal logic.
*/

