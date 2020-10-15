const inquirer = require("inquirer"); //inquirer
const fs = require("fs"); //filesystem

///////////////////////////////starting the inquire function
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your project Title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the project Description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the Installation Instructions?",
      name: "installation_instructions",
    },
    {
      type: "input",
      message: "What Usage Information should a user know for the Application?",
      name: "usage_information",
    },
    {
      type: "input",
      message: "What are the Contribution Guidlines?",
      name: "contribution_guidlines",
    },
    {
      type: "input",
      message: "What are the Contribution Guidlines?",
      name: "contribution_guidlines",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "questions",
    },
    {
      type: "list",
      name: "license",
      message: "What license to your prefer?",
      choices: ["MIT", "IBM", "Apache"],
    },
  ])
  .then(function (answers) {
    console.log(answers);
    //adding license option via type: list
    let license;
    if (answers.license === "MIT") {
      license =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers.license === "IBM") {
      license =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (answers.license === "Apache") {
      license =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)";
    }

    ///new Markdown variable
    let markdown = `### GitHub Username 
    ${answers.github} 
### Title ****
    ${answers.title} 
## Description
    ${answers.description} 
## Table of Contents *****************
* [Installation Instructions](##Installation_Instructions)
* [Usage Information](##Usage_Information)
* [Contribution Guidlines](##Contribution_Guidlines)
* [License](##License) 
## Installation_Instructions 
     ${answers.installation_instructions} 
## Usage_Information 
     ${answers.usage_information}
## Contribution_Guidlines
     ${answers.contribution_guidlines}
## License 
     ${license}`;

    fs.writeFile("README.md", markdown, function (error) {
      if (error) {
        console.log("There was an error!");
        return error;
      }
    });
  });
