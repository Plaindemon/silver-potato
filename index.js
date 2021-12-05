const fs = require('fs');
// const util = require("util");
const generateMarkdown = require('./generateMarkdown');


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
const promptUser = () => {
  console.log(`
  =================
  Create new readme
  =================
  `);
  return inquirer
  .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        const pageInfo = generateMarkdown(answers);

        console.log(generateMarkdown(answers));
        console.log(pageInfo);

        fs.writeFile('./dist/README.md', generateMarkdown(answers), (err) => {
              if (err) throw new Error(err);
      })
    })
//       .then(generateMarkdown => {
       
      
}


      // TODO: Include 
      // fs.open('README.md', 'w', function (err, file) {
      //   if(err) throw err;
      //   console.log('Saved!');
      // });




// console.log(writeToFile)
// TODO: Create a function to write README file
// function writeToFile() {
//   fs.writeFile('./dist/README.md', 'generateMarkdown goes here', (err) => {
//     if (err) throw new Error(err);
//   })
//   //   if (err) throw err;
//   //   console.log(process.argv);
//   // })
//   console.log("check files for readme")
// };
// console.log(writeToFile());
// TODO: Create a function to initialize app
function init() {
  // prompt user uses the prompt function to start asking the questions
  promptUser();
  // writeToFile();
}
// Function call to initialize app
init();