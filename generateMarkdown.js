const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Description:
  ${answers.description}

  ## Installation Instructions:
  -- ${answers.installation}

  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Contact Me](#contact)
  - [Github](#github)
  - [Contributors](#contribution)
  - [Instillation](#install)


  ## Github
  -- [${answers.github}](https://github.com/${answers.github})

  ## License
  -- ${answers.license}

  ## Languages used:
  -- Language: ${answers.language}

  ## Project Contributors:
  -- ${answers.contribution}

  ## Contact for code questions or inquiries
  -- Email: ${answers.email}
  -- Phone: ${answers.phone}
  -- Github: ${answers.github}


`;
}


// fs.writeFile("./README.md",generateMarkdown(), null, '\t'), (err) =>{
    
//   if (err) throw err;
//   console.log('Saved!');

//   console.log("Success!");

// });

module.exports = generateMarkdown;

