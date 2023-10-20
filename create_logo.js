const readline = require('readline');
const fs = require('fs');

// Function to create the SVG content
function createSVG(text, textColor, shape, shapeColor) {
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" font-size="50" fill="${textColor}" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>
  `;
  return svgContent;
}

// Function to write the SVG content to the file
function createLogoSVG(text, textColor, shape, shapeColor) {
  const svgContent = createSVG(text, textColor, shape, shapeColor);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

// Function to prompt the user for input
function promptUserInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Main function to run the application
async function generateLogo() {
  const text = await promptUserInput('Enter up to three characters for the logo: ');
  const textColor = await promptUserInput('Enter text color (keyword or hexadecimal number): ');
  const shapes = ['circle', 'triangle', 'square'];
  const shape = await promptUserInput(`Choose a shape from ${shapes.join(', ')}: `);
  if (!shapes.includes(shape.toLowerCase())) {
    console.error('Invalid shape chosen. Exiting...');
    return;
  }
  const shapeColor = await promptUserInput('Enter shape color (keyword or hexadecimal number): ');

  createLogoSVG(text, textColor, shape, shapeColor);
}

generateLogo();