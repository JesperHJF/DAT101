"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1CalculateClick(){
const h1printer = document.getElementById("txtTask1Output")
const h2printer = document.getElementById("txtRectWidth");
const h3printer = document.getElementById("txtRectHeight");


const area = h2printer.value * h3printer.value;
const perimeter = 2 * (Number(h2printer.value) + Number(h3printer.value));
h1printer.innerHTML = `Circumference = ${perimeter}, Area = ${area}`;
}
const CalcButton = document.getElementById("cmbTask1Calculate")
CalcButton.onclick = cmbTask1CalculateClick;



//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const wordlist = []
const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

function txtTask2WordKeyPress(aEvent) {
  const p67printer = document.getElementById("txtTask2Output");
  if (aEvent.key === "Enter") {
    wordlist.push(txtTask2Word.value)
    txtTask2Word.value = "";
    p67printer.innerHTML = `Words: ${wordlist.length}`;
    p67printer.innerHTML += `<br>List: ${wordlist.join(", ")}`;
  }
 
}




//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");
function cmbTask3CheckAnswerClick() {
  txtTask3Output.innerHTML = "";
  for (let i = 0; i < chkTask3.length; i++) {
    const chkBox = chkTask3[i];
    const text = `chkTask3[${i}].checked =  ${chkBox.checked}`;
    txtTask3Output.innerHTML += text + "<br/>";
  }
}
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function initializeCarRadios() {
  const carContainer = document.getElementById("divTask4Cars");
  carContainer.innerHTML = ""; // Clear the container in case of reinitialization

  // Loop through the CarTypes array to create radio buttons
  CarTypes.forEach(car => {
    const radioWrapper = document.createElement("label");

    // Create radio button input
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carRadio";
    radio.value = car.caption;

    // Add radio button and label text
    radioWrapper.appendChild(radio);
    radioWrapper.appendChild(document.createTextNode(car.caption));
    radioWrapper.appendChild(document.createElement("br")); // Line break

    // Append to the car container
    carContainer.appendChild(radioWrapper);
  });
}

function displaySelectedCar() {
  // Find the selected radio button
  const selectedRadio = document.querySelector("input[name='carRadio']:checked");

  // Update the output with the selected car or a default message
  if (selectedRadio) {
    document.getElementById("txtTask4Output").textContent = `You selected: ${selectedRadio.value}`;
  } else {
    document.getElementById("txtTask4Output").textContent = "No car selected.";
  }
}

// Initialize radio buttons on page load
initializeCarRadios();

// Attach event listener to update output on radio button selection
document.getElementById("divTask4Cars").addEventListener("change", displaySelectedCar);




//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function selectTask5AnimalsChange() {
  // Get the selected option
  const dropdown = document.getElementById("selectTask5Animals");
  const selectedAnimal = dropdown.options[dropdown.selectedIndex].text;

  // Update the output with the selected animal
  document.getElementById("txtTask5Output").textContent = `You selected: ${selectedAnimal}`;
}

// Attach the change event listener to the dropdown
document.getElementById("selectTask5Animals").addEventListener("change", selectTask5AnimalsChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function initializeTask6Dropdown() {
  const dropdown = document.getElementById("selectTask6Girls");
  dropdown.innerHTML = ""; // Clear any existing options

  // Populate dropdown with names from GirlsNames array
  GirlsNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
  });
}

function selectTask6GirlsChange() {
  // Get the selected name
  const dropdown = document.getElementById("selectTask6Girls");
  const selectedName = dropdown.options[dropdown.selectedIndex].text;

  // Update the output with the selected name
  document.getElementById("txtTask6Output").textContent = `You selected: ${selectedName}`;
}

// Initialize the dropdown with names from GirlsNames array
initializeTask6Dropdown();

// Attach the change event listener to the dropdown
document.getElementById("selectTask6Girls").addEventListener("change", selectTask6GirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function initializeMovieGenreDropdown() {
  const genreDropdown = document.getElementById("selectMovieGenre");
  genreDropdown.innerHTML = ""; // Clear existing options

  // Populate the dropdown with options from MovieGenre array
  MovieGenre.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreDropdown.appendChild(option);
  });
}

function cmbAddMovieClick() {
  // Get values from the input fields
  const movieTitle = document.getElementById("txtMovieTitle").value.trim();
  const movieGenre = document.getElementById("selectMovieGenre").value;
  const movieDirector = document.getElementById("txtMovieDirector").value.trim();
  const movieRate = document.getElementById("txtMovieRate").value.trim();

  // Validate input fields
  if (!movieTitle || !movieDirector || !movieRate || isNaN(movieRate) || movieRate < 1 || movieRate > 10) {
    alert("Please enter valid movie details. Ensure the rate is between 1 and 10.");
    return;
  }

  // Get reference to the movie table
  const movieTable = document.getElementById("tblMovies");

  // Create a new row
  const newRow = movieTable.insertRow();

  // Populate the row with the movie details
  const cell1 = newRow.insertCell(0); // Nr
  const cell2 = newRow.insertCell(1); // Title
  const cell3 = newRow.insertCell(2); // Genre
  const cell4 = newRow.insertCell(3); // Director
  const cell5 = newRow.insertCell(4); // Rate

  // Set cell values
  cell1.textContent = movieTable.rows.length - 1; // Row index (skip header)
  cell2.textContent = movieTitle;
  cell3.textContent = movieGenre;
  cell4.textContent = movieDirector;
  cell5.textContent = movieRate;

  // Clear input fields for next entry
  document.getElementById("txtMovieTitle").value = "";
  document.getElementById("txtMovieDirector").value = "";
  document.getElementById("txtMovieRate").value = "5"; // Reset to default
}

// Initialize the dropdown with genres on page load
initializeMovieGenreDropdown();

// Attach the event listener to the "Add Movie!" button
document.getElementById("cmbAddMovie").addEventListener("click", cmbAddMovieClick);