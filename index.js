const inquirer = require("inquirer"); //inquire
const fs = require("fs"); //filesystem
const path = require("path");
const markdown = require("."); //markdown file??

///////starting the inquire function
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
  ])
  .then(function (answers) {
    console.log(answers);

    let markdown = `${answers.github}
     ${answers.title}
     ${answers.description}
     ${answers.installation_instructions} 
     ${answers.usage_information}
     ${answers.contribution_guidlines}`;

    fs.writeFile("README.md", markdown, function (error) {
      if (error) {
        console.log("There was an error!");
        return error;
      }
    });
  });

//inquirer, path, markdown, fs
