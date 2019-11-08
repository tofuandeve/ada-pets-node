const axios = require('axios');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exit = () => {
  console.log("Thank you for using the Ada Pets Adoption App!");
  process.exit();
}

const options = {
  "exit": exit
}

reader.setPrompt(`Options:
  ${Object.keys(options).join("\n  ")}

What would you like to do? `);

reader.prompt();

reader.on('line', function(choice) {
  const selected = options[choice.trim().toLowerCase()];

  if (selected) {
    selected();
  } else {
    console.log(`You have selected an invalid option: "${choice}"`);
  }

  reader.prompt();
})
