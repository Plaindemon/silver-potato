const fs = require('fs');

var commandLineArgs = process.argv;
console.log(commandLineArgs);


// TODO: Create an array of questions for user input
var inquirer = require('inquirer');

// console.log(inquirer);

const questions = [
/* Pass your questions in here */
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',

  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description?',

  },
  {
    type: 'input',
    name: 'confirm',
    message: 'Add a table of contents?',

  },
  {
    type: 'checkbox',
    message: 'What languages did you use??',
    name: 'language',
    choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What license is required to use?',
    choices: ['MIT', 'ISC', 'opt 3', 'opt 4', 'opt 5']
  },
  {
    type: 'checkbox',
    name: 'contact',
    message: 'What is your preferred method of contact?',
    choices: ['Email', 'Phone', 'Work Phone']
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'

  },
  {
    type: 'input',
    name: 'phone',
    message: 'What is your number Number (or Work Number)?'

  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',

  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the instillation instructs needed to run the project?'
  },
  { type: 'input',
    name: 'contribution',
    message: 'Who contributed or worked to the project?'

  },
  {
    type: 'input',
    name: 'contact',
    message: 'What are the best ways to contact you for inquiries or questions?'
  }
];

inquirer
  .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        // CREATE readme file
        console.log(answers);
        generateMarkdown(answers);
        fs.writeFile("./README.md", JSON.stringify(generateMarkdown(answers), null, '\t'), (err) =>{
    
          if (err) throw err;
          console.log('Saved!');
        
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

      // TODO: Include 
      // fs.open('README.md', 'w', function (err, file) {
      //   if(err) throw err;
      //   console.log('Saved!');
      // });


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