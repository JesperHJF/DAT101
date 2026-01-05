"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* ● Part 1
Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).
Print out to the HTML page the expression statement you made.
● Part 2
Extend part 1 to match this "if" and "else" statement: "If I wake up at exactly 7 o'clock, I can take the bus to
school, otherwise I have to take the car to school". Run the program with different values of wake-up time
(6, 7, 8).
● Part 3
Extend part 2 to expand more options: “If I wake up at exactly 7 o'clock, I can take the bus to school,
otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to
school”. Run the program with a different value of wake-up time (7, 8).*/
let wakeUpTime = Math.ceil(Math.random() * 3) + 6;
if (wakeUpTime == 7)  {
  printOut("I woke up at " + wakeUpTime +  ", I can take the bus to school.");
}
else if (wakeUpTime == 8) {
  printOut("I woke up at " + wakeUpTime + ", I can take the train to school.");
}
else {
  printOut ("I woke up at " + wakeUpTime + ", I have to take the car to school.");
}

printOut(newLine);
printOut("if (wakeUpTime == 7)  {");
printOut("printOut(\"I woke up at \" + wakeUpTime +  \", I can take the bus to school.\");");
printOut("}");

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement.*/

const P4N1 = 10;
let P4N2 = Math.ceil(Math.random() * 20);
let P4N3 = P4N1 - P4N2;

printOut("Is " + P4N3 + " positive, negative or zero?");

if (P4N3 > 0) {
  printOut("Positive");
}

else if (P4N3 == 0) {
  printOut("Zero");
}

else {
  printOut("Negative");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small".
● Part 7
Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”.*/

let imageSize = Math.ceil(Math.random() * 8);
printOut("The image size is: " + imageSize + "MP");
if (imageSize < 4) {
  printOut("The image is too small.");
}
else if (imageSize > 6) {
  printOut("The image is too large.");
}
else {
  printOut("Thank you.");
}

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Use this code:
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”
● Part 9
Expand exercise 8 to print how many days there are in the current month. And do not use date object*/

const monthList =["Januar", "Februar", "Mars", "April", "Mai",
"Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("The month is: " + monthName);
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
}
else {
  printOut("You do not need to take vitamin D");
}

let daysInMonth;
if (monthName === "April" || monthName === "Juni" || monthName === "September" || monthName === "November") {
  daysInMonth = 30;
}
else if (monthName === "Februar") {
  daysInMonth = 28;
}
else {
  daysInMonth = 31;
}

printOut(monthName + " has " + daysInMonth + " days.");
printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*● Part 10
Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.*/

if (monthName === "Mars" || monthName === "Mai") {
  printOut("In the current month of " + monthName + ", the art gallery is closed for refurbishment.");
}
else if (monthName === "April") {
  printOut("In the current month of " + monthName + ", the art gallery is open in temporary premises next door.");
}
else {
  printOut("In the current month of " + monthName + ", the art gallery is open.");
}

printOut(newLine);