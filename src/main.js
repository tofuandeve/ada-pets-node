// Use Node-style imports for dependencies.
const axios = require('axios');
const prompt = require('prompt-sync')();

// Custom error class to represent trying to do something without a selected pet.
class NoPetSelectedError extends Error {}

// Custom error class to represent a generic failure in the Pets API.
class PetsApiError extends Error {}

// Custom error class to represent failing to find a pet in the Pets API.
class PetNotFoundError extends PetsApiError {}

// Custom error class to represent taking too long to `setResult`/`setError`.
class TimeoutError extends Error {}

// Helper to log errors in red.
const logError = (message) => {
  console.error(`\x1b[1;31m${message}\x1b[0m`);
}

// Use a closure to keep track of state.
//
// `const [a, b, c] = array` is shorthand for:
// `const a = array[0]`
// `const b = array[1]`
// `const c = array[2]`
const [setResult, setError, getResult] = (() => {
  let result = undefined;
  let error = undefined;

  const setResult = (value) => { result = value };
  const setError = (value) => { error = value };
  const getResult = () => {
    const startTime = new Date().getTime();

    while (result === undefined && error === undefined) {
      const currentTime = new Date().getTime();
      if (currentTime - startTime > 1000) {
        throw new TimeoutError("Took too long to produce a result!");
      }
    }

    if (result) {
      const ret = result;
      result = undefined;
      return ret;
    } else {
      const message = error;
      error = undefined;
      throw new Error(message);
    }
  }

  return [setResult, setError, getResult]
})();

let done = false;

// Option functions.
const exit = () => {
  done = true;

  return setResult("Thank you for using the Ada Pets Adoption App!");
}

const listPets = () => {
  // Fill in as part of Wave 1.
}

// Use a closure to make `selectedPet` private.
//
// `const [a, b, c] = array` is shorthand for:
// `const a = array[0]`
// `const b = array[1]`
// `const c = array[2]`
const [selectPet, showDetails, removePet] = (() => {
  let selectedPet = null;

  const selectPet = () => {
    let petId = null;

    while (!petId || isNaN(petId)) {
      petId = parseInt(prompt("What pet would you like to select? "), 10);

      if (isNaN(petId)) {
        logError("Invalid input.  Please enter a number.");
      }
    }

    selectedPet = petId;
    setResult(selectedPet);
  }

  const showDetails = () => {
    if (!selectedPet) {
      setError("You tried to show details for a pet without selecting it!");
      return;
    }

    // Fill out as part of Wave 2.
  }

  const removePet = () => {
    if (!selectedPet) {
      setError("You tried to remove a pet without selecting it!");
      return;
    }

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

while (!done) {
  console.log("Options:");
  for (const option of Object.keys(options)) {
    console.log(`  ${option}`);
  }
  console.log();

  const choice = prompt("What would you like to do? ")
  const selectedOption = options[choice.trim().toLowerCase()];

  if (selectedOption) {
    console.log();
    selectedOption();

    try {
      console.log(getResult());
    } catch (e) {
      logError(`Failed to ${choice}: ${e.message}`);
    }

    console.log();
  } else {
    console.log(`You have selected an invalid option: "${choice}"`);
  }
}

// Use Node-style exports to export functions for tests.
module.exports = {
  exit,
  listPets,
  selectPet,
  showDetails,
  removePet,
  addPet,
  PetsApiError,
  PetNotFoundError,
  NoPetSelectedError,
  getResult
}
