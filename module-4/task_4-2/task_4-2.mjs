"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let part1Text = "";
printOut("The array contains " + part1Array.length + " elements.");
for (let i = 0; i < part1Array.length; i++) {
    let value = part1Array[i];
    if (i == part1Array.length - 1) {
        part1Text += value.toString() + ".";
    }
    else {
        part1Text += value.toString() + ", ";
    }
}

printOut(part1Text.trim());

/*let num = 5;
for (let o = 1; o < 13; o++) {
    printOut(Math.floor(num));
    num *= num;
}*/

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const custom = part1Array.join(" supa hot fire! ");
printOut(custom);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p3Text = "Hello there, how are you?" + "<br>" + " Tummy hurt no cap";
const greetingArray = p3Text.split(" ");
let trext = "";
//printOut(greetingArray);

for (let i = 0; i < greetingArray.length; i++) {
    const word = greetingArray[i];
    trext += "Index: " + i.toString() + " = " + word + "<br>";
}
printOut(trext);



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Create an array with these names: "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" and "Kristin".
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array.*/

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeElementFromArray (aArray, aName) {
    let deleteIndex = -1; //Vi starter med en ugyldig index
    for (let i = 0; i < aArray.length; i++) {
        const name = aArray[i];
        if (name === aName) {
            // Her kan vi slette elementet for eksempel "Hilde"
            // Dette gjør vi ikke her! Her løper vi igjen, og må slette senere
            // Vi må lagre indexen i en variabel som slettes senere
            deleteIndex = i;
        }
    }
    if (deleteIndex >= 0) {
        printOut(aName + " is found, and deleted.");
        aArray.splice(deleteIndex, 1);
        printOut(aArray.length.toString() + " elements remain in the array.");
    }
    else {
        printOut(aName + " is not found.");
    }
}

removeElementFromArray(girls, "Anne");


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let toggle = true;
toggle = !toggle;
printOut(toggle.toString());
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
