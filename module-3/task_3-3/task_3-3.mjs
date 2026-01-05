"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".*/

function capitalizeFirstLetter(string) {
  if (!string) return string; // Handle empty or null strings

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function printTodaysDate() {
    const today = new Date();
    const todayToString = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const month = today.toLocaleDateString("no-NB", { month: "long" });
    const weekdayCap = capitalizeFirstLetter(todayToString);
    printOut(weekdayCap);
}

const nowSec = new Date().getSeconds();
const nowMin = new Date().getMinutes();
const nowHour = new Date().getHours();
const nowDay = new Date().getDate();
const nowMonth = new Date().getMonth() + 1; // Months are zero-based
const nowYear = new Date().getFullYear();
printOut(nowYear + nowMonth + nowDay + nowHour + nowMin + nowSec);
function updateSeconds() {
    //replaceText(((nowYear*60*60*24*12*12).toString()) + (nowMonth*60*60*24*12) + (nowDay*60*60*24) + (nowHour*60*60) + (nowMin*60) + nowSec);
    printOut("Seconds since start of year: " + (((((nowMonth - 1) * 30 + (nowDay - 1)) * 24 + nowHour) * 60 + nowMin) * 60 + nowSec).toString());
}
setInterval(updateSeconds, 10000);
printOut()

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!
Remember:
● This task isn't just about coding; it's about harnessing the power of dates and functions to create
something both informative and engaging.
● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output.*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
