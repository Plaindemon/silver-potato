const fs = require('fs');


// TODO: Create an array of questions for user input
var inquirer = require('inquirer');

// console.log(inquirer);

inquirer
    .prompt([
/* Pass your questions in here */
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?',

  },
  {
    type: 'input',
    name: 'Description',
    message: 'How would you like to describe your project?',

  },
  {
    type: 'list',
    name: 'Table Of Contents',
    message: 'Add a table of contents?',

  },
  {
    type: 'checkbox',
    name: 'License',
    message: 'What are you going to use?',
    choices: ['option 1', 'option 2', 'opt 3', 'opt 4', 'opt 5']
  },
  {
    type: 'input',
    name: 'Contact',
    message: 'What is your preferred method of communication?'
  },
  {
    type: 'input',
    name: 'Contact',
    message: 'What is your preferred method of communication?'
  },
  {
    type: 'input',
    name: 'Contact',
    message: 'What is your preferred method of communication?'
  },



    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
        fs.writeFile("input.txt", JSON.stringify(answers, null, '\t'), function(err) {
    
          if (err) {
            return console.log(err);
          }
      
          console.log("Success!");
      
        });
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });

      // TODO: Include packages needed for this application


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();