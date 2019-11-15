// Use Node-style imports for dependencies.
const prompt = require('prompt-sync')();
const result = require('./result.js');
const adaPets = require('./adaPets.js');

const setResult = result.setResult
const setError = result.setError
const getResult = result.getResult

const listPets = adaPets.listPets;
const showDetails = adaPets.showDetails;
const removePet = adaPets.removePet;
const addPet = adaPets.addPet;

// Helper to log errors in red.
const logError = (message) => {
  console.error(`\x1b[1;31m${message}\x1b[0m`);
}

let done = false;

const exit = () => {
  done = true;

  return setResult("Thank you for using the Ada Pets Adoption App!");
}

let selectedPet = null;

const selectPet = () => {
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
    selectedOption(selectedPet);

    try {
      console.log(getResult(1000));
    } catch (e) {
      logError(`Failed to ${choice}: ${e.message}`);
    }

    console.log();
  } else {
    console.log(`You have selected an invalid option: "${choice}"`);
  }
}
