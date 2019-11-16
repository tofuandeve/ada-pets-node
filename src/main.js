// Use Node-style imports for dependencies.
const vorpal = require('vorpal')();
const result = require('./result.js');
const adaPets = require('./adaPets.js');

const setResult = result.setResult;
const setError = result.setError;
const setHandlers = result.setHandlers;

const listPets = adaPets.listPets;
const showDetails = adaPets.showDetails;
const removePet = adaPets.removePet;
const addPet = adaPets.addPet;

const exit = () => {
  setResult("Thank you for using the Ada Pets Adoption App!");
  process.exit();
}

let selectedPet = null;

const selectPet = (_, args) => {
  const petId = parseInt(args.petId, 10);
  if (isNaN(petId)) {
    setError("Please provide a number for petId got: ${args.petId}");
  } else {
    selectedPet = petId;
    setResult(petId);
  }
}

// Helper to log errors in red.
const logError = (message) => {
  console.error(`\x1b[1;31m${message}\x1b[0m`);
}

const doAction = (action) => {
  return (args, done) => {
    const resultHandler = (result) => {
      console.log(result);
      done();
    }

    const errorHandler = (error) => {
      logError(error);
      done();
    }

    setHandlers(resultHandler, errorHandler);
    action(selectedPet, args);
  }
}

// Register the options.
vorpal.find('exit').remove();
vorpal
  .command("exit", "exits the program")
  .action(doAction(exit));
vorpal
  .command("list pets", "list the pets from the API")
  .action(doAction(listPets));
vorpal
  .command("select pet <petId>")
  .action(doAction(selectPet));
vorpal
  .command("show details", "show the details for the selected pet")
  .action(doAction(showDetails));
vorpal
  .command("remove pet", "remove the selected pet")
  .action(doAction(removePet(selectedPet)));
vorpal
  .command("add a pet", "add a new pet")
  .action(doAction(addPet));

vorpal
  .delimiter('What would you like to do?')
  .show();
