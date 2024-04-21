// Shape class utilizes constructor to define what it means to be a shape
class Shape {
    constructor() {
        this.color = "";
    }
    // Shape class takes in setColor function
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// Triangle class inherits properties defined in the Shape class
class Triangle extends Shape {
    render() {
        // Returns triangle with color input
        return '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />';
    }
}

// Square class inherits properties defined in the Shape class
class Square extends Shape {
    render() {
        // Returns square with color input
        return '<rect width="100" height="100" fill="${this.color}" />';
    }
}

// Circle class inherits properties defined in the Shape class
class Circle extends Shape {
    render() {
        // Returns circle with color input
        return '<circle cx="50" cy="50" r="40" fill="${this.color}" />';
    }
}

// Exports classes (triangle, square, circle)

module.exports = {
    Triangle,
    Square,
    Circle,
};