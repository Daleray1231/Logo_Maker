// Required modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// Define a list of questions to gather input from the user
const questions = [
  {
    type: 'input',
    name: 'logoText',
    message: 'Enter the text for your logo (maximum: 3 letters):',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color keyword or a hexadecimal number for the logo text color:',
  },
  {
    type: 'input',
    name: 'logoColour',
    message: 'Please enter a color keyword or a hexadecimal number for the logo background color:',
  },
  {
    type: 'list',
    name: 'logoShape',
    message: 'Select a logo shape:',
    choices: ['triangle', 'circle', 'square'],
  },
];

// Function to initialize the application
function init() {
  // Prompt the user with questions
  inquirer.prompt(questions)
    .then((answers) => {
      let shapeInstance;
      switch (answers.logoShape) {
        case 'circle':
          shapeInstance = new Circle(answers.logoText, answers.textColor, answers.logoColour);
          break;
        case 'triangle':
          shapeInstance = new Triangle(answers.logoText, answers.textColor, answers.logoColour);
          break;
        case 'square':
          shapeInstance = new Square(answers.logoText, answers.textColor, answers.logoColour);
          break;
        default:
          console.log('Invalid shape selected.');
          return;
      }

      // Generate SVG content based on user input
      const svgContent = shapeInstance.render();

      // Write the SVG content to a file
      fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg!');
      });
    });
}

// Function call to initialize the application
init();