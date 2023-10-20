// Define a base class for creating SVG shapes
class Shape {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // Generate an SVG with the provided shape content
    generateSVG(shapeContent) {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shapeContent}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
    }
}

// Define a Circle class that extends the Shape class
class Circle extends Shape {
    constructor(logoText, textColor, shapeColor, radius = 50) {
        super(logoText, textColor, shapeColor);
        this.radius = radius;
    }

    // Render a circle SVG with the specified properties
    render() {
        const circleContent = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}" />`;
        return this.generateSVG(circleContent);
    }
}

// Define a Triangle class that extends the Shape class
class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    }

    // Render a triangle SVG with the specified properties
    render() {
        const triangleContent = `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
        return this.generateSVG(triangleContent);
    }
}

// Define a Square class that extends the Shape class
class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
        // Any square-specific properties, if needed
    }

    // Render a square SVG with the specified properties
    render() {
        const side = 100;
        const squareContent = `<rect x="100" y="50" width="${side}" height="${side}" fill="${this.shapeColor}" />`;
        return this.generateSVG(squareContent);
    }
}

// Export the Circle, Triangle, and Square classes for use in other modules
module.exports = { Circle, Triangle, Square };