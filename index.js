// Inquirer (node package manager) import
const inquirer = require('inquirer');

// File system module (node package manager) import
const fs = require('fs');

// Importing classes from .lib/shapes directory
const { Triangle, Square, Circle } = require('./lib/shapes');

// Function writes the SVG file using user answers from inquirer prompts


// Function uses inquirer .prompt to prompt the user to answer questions in the CLI and save user input
function promptUser() {
    inquirer.prompt([
        // Text prompt for user input
        {
            type: 'list',
            message: 'What shape would you like the logo to render?',
            choices: ['Triangle', 'Square', 'Circle'],
            name:'shape',
        },
        // Shape color prompt for user input
        {
            type: 'input',
            message: 'What color would you like the shape to be? (enter color keyword OR a hexadecimal number)',
            name: 'shapeBackgroundColor',
        },
        // Text prompt
        {
            type: 'input',
            message: 'What text would you like the logo to display? (enter up to three characters)',
            name: 'text',
        },
        // Text color prompt
        {
            type: 'input',
            message: 'What color would you like the text to be? (enter color keyword OR a hexadecimal number)',
            name: 'textColor',
        },
    ])
    .then((answers) => {
        // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
        if (answers.text.length > 3) {
            console.log('Error: Text must be 3 characters or less');
            return;
        } else {
            // Calling write file function to generate SVG file
            writeToFile('logo.svg', answers);
        }
    });
}

// Calling promptUser function so inquirer prompts fire off when app is run
promptUser();