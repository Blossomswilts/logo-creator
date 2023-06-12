const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Create the logo
        const logo = createLogo(answers);
        // Write the logo to a file into the examples folder
        writeToFile('logos/logo.svg', logo);
    });
}

// Function to create the logo
function createLogo(answers) {
    // Set an empty string to hold the logo
    let logo = '';
    // Set width and height of the logo
    logo = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">`;
    // Wrap the text in a group tag
    logo += `<g>`;
    // Create the shape
    const shape = createShape(answers);
    // Add the shape to the logo
    logo += shape;
    // Set the text to the user input
    logo += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" font-size="65">${answers.text}</text>`;
     // Close the group tag
     logo += `</g>`;
    // Close the svg tag
    logo += `</svg>`;
    // Return the logo
    return logo;
}

// Function to create the shape
function createShape(answers) {
    // Set an empty string to hold the shape
    let shape = '';
    // Create the shape based on the user input
    switch (answers.shape) {
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
    }
    // Set the color of the shape to the user input
    shape.setColor(answers.shapeColor);
    // Return the shape
    return shape.render();
}

// Questions for the user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 letters for your logo text: ',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color for your logo text: ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your logo: ',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color for your logo background: ',
    }
];

// Function to write the logo to a file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Your logo has been created!');
    });
}

// Call the init function
init();
