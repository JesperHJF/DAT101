
"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";
printOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Array Creation
let numbers = []; 

// Use a loop to populate the array with numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  numbers.push(i);
}

// Array Printing
for (let i = 0; i < numbers.length; i++) {
  printOut((numbers[i]).toString()); 
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
printOut(numbers.join(", ")); 

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
//  Define the constant text
const text = "Hello there, how are you?";

// Convert the text to an array of words
let wordsArray = text.split(" "); 

// Traverse the array and print word information
for (let i = 0; i < wordsArray.length; i++) {
  printOut("Word number " + (i + 1) + ", index " + i + ", word: " + wordsArray[i]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Create the array of names
let names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", 
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", 
    "Maria", "Elisabeth", "Kristin"];

// Define the function to remove an element
function removeElement(array, element) {
// Check if the element exists in the array
let index = array.indexOf(element);

if (index !== -1) {
// Element exists, so remove it
array.splice(index, 1);
printOut(element + " was removed from the array.");
} else {
// Element does not exist
printOut(element + " was not found in the array.");
}
}

// Example usage of the function
removeElement(names, "Inger"); // Should remove "Inger" and print a confirmation
removeElement(names, "Tom");   // Should print that "Tom" was not found

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

let boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", 
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", 
    "Liam", "Håkon", "Theodor", "Magnus"];

// Merging the two arrays in one line by calling concat on an empty array
let allNames = [].concat(names, boyNames);

printOut(allNames.join(", "));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Define the TBook class
class TBook {
    // Constructor to initialize the attributes: title, author, and ISBN
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  
    // Method to return a string representation of the book using concatenation
    toString() {
      return "Title: " + this.title + ", Author: " + this.author + ", ISBN: " + this.isbn;
    }
  }
  
  // Create an array of three TBook instances
  const books = [
    new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
    new TBook("1984", "George Orwell", "9780451524935"),
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565")
  ];
  
  // Loop through the books array and print each book's details
  for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
  }
  
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Monday" },
    WeekDay2: { value: 0x02, name: "Tuesday" },
    WeekDay3: { value: 0x04, name: "Wednesday" },
    WeekDay4: { value: 0x08, name: "Thursday" },
    WeekDay5: { value: 0x10, name: "Friday" },
    WeekDay6: { value: 0x20, name: "Saturday" },
    WeekDay7: { value: 0x40, name: "Sunday" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays" },
    Weekends: { value: 0x20 + 0x40, name: "Weekends" }
};

// Get all keys
const keys = Object.keys(EWeekDays);

// Loop through the keys array and print the values of each key in the EWeekDays object
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const item = EWeekDays[key]; // Get the item corresponding to the current key
    printOut(key + ": " + item.name + ", Value: " + item.value.toString(16)); // Print key, name and value (rep ukedager)
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Step 1: Create an array with 35 random numbers between 1 and 20
let randomNumbers = [];
for (let i = 0; i < 35; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20) + 1); // Random number between 1 and 20
}

// Step 2: Sort the array in ascending order using a callback function
let ascendingOrder = randomNumbers.slice(); // Create a copy of the array for sorting
ascendingOrder.sort(function(a, b) {
    return a - b; // Compare numbers in ascending order
});

// Step 3: Sort the array in descending order using a callback function
let descendingOrder = randomNumbers.slice(); // Create a copy of the array for sorting
descendingOrder.sort(function(a, b) {
    return b - a; // Compare numbers in descending order
});

// Output the results
printOut(("Original Array:" + randomNumbers).toString());
printOut(("Ascending Order:" + ascendingOrder).toString());
printOut(("Descending Order:" + descendingOrder).toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
// Assuming randomNumbers is already created from Task 8, you don't need to create it again

// Step 2: Count the frequency of each number in the array
let frequencyCount = {};

// Loop through randomNumbers and count the occurrences of each number
randomNumbers.forEach(function(number) {
    if (frequencyCount[number]) {
        frequencyCount[number]++;  // Increment count if number already exists
    } else {
        frequencyCount[number] = 1;  // Initialize count to 1 if number is encountered for the first time
    }
});

// Step 3: Sort the numbers based on frequency (descending) and in case of ties, by number (ascending)
let sortedByFrequency = Object.keys(frequencyCount).map(function(key) {
    return { number: parseInt(key), frequency: frequencyCount[key] };
});

// Sort by frequency descending and by number ascending if frequencies are the same
sortedByFrequency.sort(function(a, b) {
    if (b.frequency === a.frequency) {
        return a.number - b.number;  // If frequencies are the same, sort by number (ascending)
    } else {
        return b.frequency - a.frequency;  // Otherwise, sort by frequency (descending)
    }
});

// Step 4: Print the numbers and their frequency in sorted order
printOut("Numbers and their frequencies:");
sortedByFrequency.forEach(function(item) {
    printOut("Number: " + item.number + " - Frequency: " + item.frequency);
});

// Step 5: Print the frequencies and which numbers correspond to them
printOut(newLine);
printOut("Frequencies and corresponding numbers:");

let frequencyGroups = {};

// Group numbers by their frequencies
sortedByFrequency.forEach(function(item) {
    if (!frequencyGroups[item.frequency]) {
        frequencyGroups[item.frequency] = [];
    }
    frequencyGroups[item.frequency].push(item.number);
});


// Sort frequencies in descending order and print the corresponding numbers
Object.keys(frequencyGroups).sort(function(a, b) {
    return b - a;  // Sort frequencies in descending order
}).forEach(function(frequency) {
    printOut("Frequency: " + frequency + " - Numbers: " + frequencyGroups[frequency].join(", "));
});

printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
// Step 1: Create an empty array to hold the rows
let array = [];

// Step 2: Populate the array with rows and columns
for (let i = 0; i < 5; i++) { // Loop for 5 rows
    let row = [];  // Create an empty array for each row

    for (let j = 0; j < 9; j++) { // Loop for 9 columns
        // Add a cell with text that shows the row and column
        row.push("Row " + (i + 1) + ", Column " + (j + 1));
    }

    // Add the populated row to the main array
    array.push(row);
}

// Step 3: Print the array using nested loops
printOut("Array:");  

for (let i = 0; i < 5; i++) { // Loop through rows
    let rowText = "";  // Initialize a string to hold the row's output

    for (let j = 0; j < 9; j++) { // Loop through columns
        rowText += array[i][j] + "\t"; // Add each cell's text to the row
    }

    // Print the current row using printOut
    printOut(rowText); 
}

printOut(newLine);
