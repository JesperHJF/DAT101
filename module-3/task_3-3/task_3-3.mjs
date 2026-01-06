"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".*/

/*function formatDate () {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let todayFormatted = new Date().toLocaleDateString("no-NB", options);
    todayFormatted = todayFormatted.charAt(0).toUpperCase() + todayFormatted.slice(1);
}
printOut(formatDate);*/


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
/* Create a function that receives the radius of a circle and prints the diameter, circumference, and area */


let radius = 15;
let diameter = 0;
let circumference = 0;
let area = 0;

function calculateCircle() {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);

    printOut("Radius: " + radius.toFixed(2));
    printOut(newLine);
    printOut("Diameter: " + diameter.toFixed(2));
    printOut(newLine);
    printOut("Circumference: " + circumference.toFixed(2));
    printOut(newLine);
    printOut("Area: " + area.toFixed(2));
    printOut(newLine);
return;
}
printOut(area);



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
