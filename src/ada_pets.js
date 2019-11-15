// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

// Option functions.
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
    const prompt = require('prompt-sync')(); // selectPet needs to ask for a petId.
    let petId = null;

    petId = parseInt(prompt("What pet would you like to select? "), 10);

    if (isNaN(petId)) {
      setError("Invalid pet id. ${petId} is not an integer.");
      return;
    } else {
      selectedPet = petId;
      setResult(selectedPet);
    }
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

// Use Node-style exports to export functions for tests and main.
//
// `{a, b, c}` is shorthand for:
//
// `{a: a, b: b, c: c}
module.exports = {
  listPets,
  selectPet,
  showDetails,
  removePet,
  addPet
}
