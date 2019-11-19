// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`An error occurred: ${error.response.statusText}`);
  });
}

const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }
  const detailUrl = BASE_URL + selectedPet;

  axios.get(detailUrl)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("Failed to get details")
  });
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  const petUrl = BASE_URL + selectedPet;
  axios.delete(petUrl)
  .then((response) => {
    setResult("Pet has found a furever home!");
  })
  .catch((error) => {
    setError("Failed to remove pet");
  });
}

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("Failed to add a new pet!")
  });
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}