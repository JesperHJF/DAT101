"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Answer1 = (2 + 3 * 2 - 4 * 6);
const Answer1Alt = (2 + 3 * (2 - 4) * 6);
printOut("The answer to the expression 2 + 3 * 2 - 4 * 6 is: " + Answer1);
printOut("The answer to the expression 2 + 3 * (2 - 4) * 6 is: " + Answer1Alt);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let Meters = 2534000;
const inches = (Meters / 254 / 10);
const inchesRounded = Math.round(inches * 100) / 100;
printOut("25 meters and 34 centimeters equal to " + (inchesRounded) + " inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Days = 3;
const Hours = 12;
const Minutes = 14;
const Seconds = 45;
let DtoM = Days * 24 * 60;
let HtoM = Hours * 60;
let MtoM = Minutes;
let StoM = Seconds / 60;
let Answer3 = DtoM + HtoM + MtoM + StoM;

printOut("3 days, 12 hours, 14 minutes and 45 seconds equal to " + Answer3 + " minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/
const TotalMinutes = 6322.52;
const Days2 = TotalMinutes / (24 * 60);
const Days2Rounded = Math.floor(Days2);
let rest1 = TotalMinutes - (Days2Rounded * 24 * 60);

const Hours2 = Math.floor(rest1 / 60);
let rest2 = rest1 - Hours2 * 60;

const Minutes2 = Math.floor(rest2);
let rest3 = rest2 - Minutes2;

let Seconds2 = Math.floor(rest3 * 60);


printOut("6,322.52 minutes equal to " + Days2Rounded + " days, " + Hours2 + " hours, " + Minutes2 + " minutes, and " + Seconds2 + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/

const NOKtoUSD = 8.6 / 76;
const USDtoNOK = 76 / 8.6;
let dollars = 54;
let NOK = Math.round(dollars / NOKtoUSD);
printOut("54 USD is equal to " + NOK + " Norwegian kroner.");

dollars = 100;
NOK = Math.round(dollars / NOKtoUSD);
printOut("100 USD is equal to " + NOK + " Norwegian kroner.");

let kroner = 100;
let USD = Math.round(kroner / USDtoNOK);
printOut("100 Norwegian kroner is equal to " + USD + " USD.");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text.*/

const text = "There is much between heaven and earth that we do not understand.";
printOut("The text has " + text.length + " characters.");
printOut("The character at position number 19 is: " + text.charAt(19));
printOut("The characters starting at position number 35 and 8 characters forward are: " + text.charAt(35) + text.charAt(36) + text.charAt(37) + text.charAt(38) + text.charAt(39) + text.charAt(40) + text.charAt(41) + text.charAt(42));
printOut("The index at which 'earth' starts in the text is: " + text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?*/

printOut("Is 5 greater than 3?: " + (5 > 3));
printOut("Is 7 greater than or equal to 7?: " + (7 >= 7));
printOut('Is "a" greater than "b"?: ' + ("a" > "b"));
printOut('Is "1" less than "a"?: ' + ("1" < "a"));
printOut('Is "2500" less than "abcd"?: ' + ("2500" < "abcd"));
printOut('"arne" is not equal to "thomas": ' + ("arne" != "thomas"));
printOut("(2 equals 5) is this statement true?: " + (2 === 5));
printOut('("abcd" is greater than "bcd") is this statement false?: ' + ("abcd" > "bcd"));

/*Gjør denne oppgaven med comparison operators*/

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p8t1 = "254";
const p8t2 = "57.23";
const p8t3 = "25 kroner";

printOut(parseFloat(p8t1));
printOut(parseFloat(p8t2));
printOut(parseFloat(p8t3));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.ceil(Math.random() * 360);
printOut("Random number between 1 and 360: " + r);

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let Dager = 131;
let LeftoverDager = Dager % 7;
let Uker = (Dager - LeftoverDager) / 7;

printOut("131 days is " + Uker + " weeks and " + LeftoverDager + " days.");
printOut(newLine);

