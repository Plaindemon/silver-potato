const fs = require('fs');

var commandLineArgs = process.argv;
console.log(commandLineArgs);


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
    message: 'What is the description?',

  },
  {
    type: 'input',
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
    type: 'checkbox',
    name: 'Contact',
    message: 'What is your preferred method of contact?',
    choices: ['Email', 'Phone', 'Work Phone']
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'

  },
  {
    type: 'input',
    name: 'Phone',
    message: 'What is your number Number (or Work Number)?'

  },
  {
    type: 'input',
    name: 'Github',
    message: 'What is your github username?',

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

// CREATE readme file
fs.open('README.md', 'w', function (err, file) {
  if(err) throw err;
  console.log('Saved!');
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', 'Hello Content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
}

console.log(writeToFile())

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();