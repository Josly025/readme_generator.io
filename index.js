const inquirer = require("inquier"); //inquire
const fs = require("fs"); //filesystem
const path = require("path");
const markdown = require("."); //markdown file??

///////starting the inquire function
inquirer.prompt([
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
    message: "What are the installation instructions?",
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
  //Description
  //Installation Instructions
  //Usage Information
  //Contribution Guidlines
  //Test Instructions
  //Liscense
  //GitHub
]);
///promise to write to a markdown file

// function writerToFile()
