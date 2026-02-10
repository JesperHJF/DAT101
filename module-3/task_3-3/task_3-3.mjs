"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function printToday() {
    const today = new Date();
    const norwegificator = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(norwegificator.charAt(0).toUpperCase() + norwegificator.slice(1));
}

printToday();
printOut(newLine);


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Funksjon som beregner antall dager igjen til lanseringen av 2XKO
function calcDays() {
    const releaseDate = new Date(2025, 4, 14); 
    const today = new Date();
    const difference = releaseDate - today;
    const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
    // Skriver ut hvor mange dager som gjenstår ved å bruke .toString()
    printOut("2XKO kommer om " + daysRemaining.toString() + " dager!!!!");
    return daysRemaining;
}

// Funksjon som kombinerer dagens dato og nedtelling til lanseringen
function displayDateAndCountdown() {
    printToday();
    calcDays();
    printOut(newLine);
}

displayDateAndCountdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the radius of a circle and prints the diameter, circumference, and area */


function calcProperties (radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut("Radius: " + radius.toFixed(2));
    printOut("Diameter: " + diameter.toFixed(2));
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));

    printOut(newLine);
}

    calcProperties(5);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/


function calcRectangle (rectangle) {
    const height = rectangle.height;
    const width = rectangle.width;

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("Width: " + width.toFixed(2));
    printOut("Height: " + height.toFixed(2));
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));

}

    calcRectangle( {width: 5, height: 17} );
    


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. Formula:*/

function convertTemp(temp, tempType) {
    let celsius, fahrenheit, kelvin;

    if (tempType === "C") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (tempType === "F") {
        fahrenheit = temp;
        celsius = (temp - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (tempType === "K") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } 

    printOut("Celcius: " + Math.round(celsius));
    printOut("Fahrenheit: " + Math.round(fahrenheit));
    printOut("Kelvin: " + Math.round(kelvin));
    printOut(newLine);

}

convertTemp(104, "C");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100).*/

function calcNet(gross, type) {
    let vat;

    switch(type.toLowerCase()) {
        case "normal":
            vat = 25;
            break;
        case "food":
            vat = 15;
            break;
        case "hotel":
        case "transport":
        case "cinema":
            vat = 10;
            break;
        default:
            printOut("Unknown VAT group!");
    }

    const net = (100 * gross) / (vat + 100);
    
    printOut("Gross amount: " + gross.toFixed(2));
    printOut("VAT type: " + type);
    printOut("Net amount: " + net.toFixed(2));
    printOut(newLine);
}

calcNet(1250, "normal");
calcNet(230, "food");
calcNet(6250, "hotel");
calcNet(15120000, "racecars");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/

function calcSpeedDistanceTime(speed, distance, time) {
    if (speed === null && distance === null || speed === null && time === null ||
        distance === null && time === null || speed === null && distance === null && time === null) {
        printOut("NaN"); 
    } else if (distance === null) {
        distance = speed * time;
        printOut("Calculated Distance: " + distance.toFixed(2) + " units");
    } else if (time === null) {
        time = distance / speed;
        printOut("Calculated Time: " + time.toFixed(2) + " time units");
    } else if (speed === null) {
        speed = distance / time;
        printOut("Calculated Speed: " + speed.toFixed(2) + " units/time");
    }
        printOut(newLine);
    }



calcSpeedDistanceTime(null, 150, 3);
calcSpeedDistanceTime(50, null, 2);
calcSpeedDistanceTime(60, 180, null);
calcSpeedDistanceTime(null, 15, null);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function createText(text, maxSize, char, insertAtEnd) {
    if (text.length < maxSize && insertAtEnd === true) {
        let placeholder = "";
        while (text.length + placeholder.length < maxSize)
            {
                placeholder += char;
            }

            text = placeholder + text;

    }

    else if(text.length < maxSize && insertAtEnd === false)
        {
            let placeholder = "";

            while (text.length+ placeholder.length > maxSize)
                {   
                    placeholder += char;
                }
    

        text = text + placeholder;
        }
        else
        {
            return text;
        }

       return text;
    }

let modText1 = createText("this is a text",60, "\u00A0", false);
let modText2 = createText("this is a text",60, "\u00A0 ", true);

printOut(modText1);
printOut(modText2);
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* From mathematics, we have the following expression:
1 + 2 = 3
4 + 5 + 6 = 7 + 8
9 + 10 + 11 + 12 = 13 + 14 + 15
16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!"*/

function checkMathExpressions(lines) {
    let num = 1;

    for (let i = 1; i <= lines; i++) {
    
        let leftSideElements = i + 1; 
        let rightSideElements = i;      
        
        let leftSideNumbers = Array.from({ length: leftSideElements }, (_, index) => num + index);
        let rightSideNumbers = Array.from({ length: rightSideElements }, (_, index) => num + leftSideElements + index);

        
        let leftSum = leftSideNumbers.reduce((acc, val) => acc + val, 0);
        let rightSum = rightSideNumbers.reduce((acc, val) => acc + val, 0);

        printOut(leftSideNumbers.join(" + ") + " = " + rightSideNumbers.join(" + "));

        if (leftSum !== rightSum) {
            printOut("Error: The two sides are not equal in line " + i);
            return; 
        }

        num += leftSideElements + rightSideElements;
    }

    printOut("Mathematics is fun!");
}

checkMathExpressions(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.*/

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

let number = 17;
let result = factorial(number).toString();

printOut(result); 


printOut(newLine);
