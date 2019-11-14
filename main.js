const axios = require('axios');
const readline = require('readline');

// Setup for the readline library.
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.setPrompt(`Options:\n${Object.keys(options).join("\n  ")}\n\nWhat would you like to do? `);

reader.prompt();

// Option functions.
const exit = () => {
  console.log("Thank you for using the Ada Pets Adoption App!");
  process.exit();
}

// Register the options.
const options = {
  "exit": exit
}

// Code to display the menu and prompt then run the selected option.
reader.on('line', function(choice) {
  const selected = options[choice.trim().toLowerCase()];

  if (selected) {
    selected();
  } else {
    console.log(`You have selected an invalid option: "${choice}"`);
  }

  reader.prompt();
})
