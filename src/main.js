// Use Node-style imports for dependencies.
const prompt = require('prompt-sync')();
// `const {a, b, c} = object` is shorthand for:
// 
// `const a = object.a`
// `const b = object.b`
// `const c = object.c`
const {setResult, getResult} = require('./result.js');

const {
  listPets,
  selectPet,
  showDetails,
  removePet,
  addPet
} = require('./ada_pets.js');

// Helper to log errors in red.
const logError = (message) => {
  console.error(`\x1b[1;31m${message}\x1b[0m`);
}

let done = false;

const exit = () => {
  done = true;

  return setResult("Thank you for using the Ada Pets Adoption App!");
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
      console.log(getResult(1000));
    } catch (e) {
      logError(`Failed to ${choice}: ${e.message}`);
    }

    console.log();
  } else {
    console.log(`You have selected an invalid option: "${choice}"`);
  }
}
