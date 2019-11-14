// Use Node-style imports for dependencies.
const axios = require('axios');
const readline = require('readline');

// Setup for the readline library.
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Custom error class to represent a generic failure in the Pets API.
class PetsApiError extends Error {
}

// Custom error class to represent failing to find a pet in the Pets API. 
class PetNotFound extends PetsApiError {
}

// Option functions.
const exit = () => {
  console.log("Thank you for using the Ada Pets Adoption App!");
  process.exit();
}

const listPets = () => {
  // Fill in as part of Wave 1.
  throw new PetsApiError("danger! danger!");
}

// Use a closure to make `selectedPet` private.
const [selectPet, showDetails, removePet] = (() => {
  let selectedPet = null;

  const selectPet = () => {
    // Fill out as part of Wave 2.
  }

  const showDetails = () => {
    // Fill out as part of Wave 2.
  }

  const removePet = () => {
    // Fill out as part of Wave 3.
  }

  return [selectPet, showDetails, removePet];
})();

const addPet = () => {
  // Fill out as part of Wave 4.
}

// Register the options.
const options = {
  "exit": exit,
  "list pets": listPets,
  "select pet": selectPet,
  "show details": showDetails,
  "remove pet": removePet,
  "add a pet": addPet
}

// Code to display the menu and prompt then run the selected option.
reader.setPrompt(`Options:\n  ${Object.keys(options).join("\n  ")}\n\nWhat would you like to do? `);
reader.prompt();

// Colors.
const brightRed = "\x1b[1;31m";
const resetColor = "\x1b[0m";

reader.on('line', function(choice) {
  const selectedOption = options[choice.trim().toLowerCase()];

  if (selectedOption) {
    try {
      console.log();
      selectedOption();
    } catch (e) {
      console.error(`${brightRed}Failed to ${choice}: ${e.message}${resetColor}`);
    }
    console.log();
  } else {
    console.log(`You have selected an invalid option: "${choice}"`);
  }

  reader.prompt();
});

// Use Node-style exports to export functions for tests.
module.exports = {
  exit,
  listPets,
  selectPet,
  showDetails,
  removePet,
  addPet,
  PetsApiError
}
