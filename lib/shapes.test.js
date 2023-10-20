// Import the Circle, Triangle, and Square classes from the 'shapes.js' module
const { Circle, Triangle, Square } = require('./shapes.js');

// Describe block for testing the Circle class
describe('Circle Class', () => {
    it('should render the correct SVG for a Circle', () => {
        // Create a new Circle instance with specific properties
        const circle = new Circle('ABC', 'red', 'blue');
        // Render the SVG for the Circle
        const svgContent = circle.render();

        // Assertions to check if the SVG contains the expected elements and attributes
        expect(svgContent).toContain('<circle');
        expect(svgContent).toContain('cx="150"');
        expect(svgContent).toContain('cy="100"');
        expect(svgContent).toContain('r="50"');
        expect(svgContent).toContain('fill="blue"');
        expect(svgContent).toContain('<text');
        expect(svgContent).toContain('fill="red"');
        expect(svgContent).toContain('>ABC<');
    });
});

// Describe block for testing the Triangle class
describe('Triangle Class', () => {
    it('should render the correct SVG for a Triangle', () => {
        // Create a new Triangle instance with specific properties
        const triangle = new Triangle('DEF', 'yellow', 'green');
        // Render the SVG for the Triangle
        const svgContent = triangle.render();

        // Assertions to check if the SVG contains the expected elements and attributes
        expect(svgContent).toContain('<polygon');
        expect(svgContent).toContain('points="150,50 100,150 200,150"'); // Updated this line to match the correct points
        expect(svgContent).toContain('fill="green"');
        expect(svgContent).toContain('<text');
        expect(svgContent).toContain('fill="yellow"');
        expect(svgContent).toContain('>DEF<');
    });
});

// Describe block for testing the Square class
describe('Square Class', () => {
    it('should render the correct SVG for a Square', () => {
        // Create a new Square instance with specific properties
        const square = new Square('GHI', 'black', 'white');
        // Render the SVG for the Square
        const svgContent = square.render();

        // Assertions to check if the SVG contains the expected elements and attributes
        expect(svgContent).toContain('<rect');
        expect(svgContent).toContain('x="100"');
        expect(svgContent).toContain('y="50"');
        expect(svgContent).toContain('width="100"');
        expect(svgContent).toContain('height="100"');
        expect(svgContent).toContain('fill="white"');
        expect(svgContent).toContain('<text');
        expect(svgContent).toContain('fill="black"');
        expect(svgContent).toContain('>GHI<');
    });
});