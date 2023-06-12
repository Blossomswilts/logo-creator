//  This will hold all the shapes that are used in the logo in classes
//  and will be called in the main function to create the logo

class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="150" r="150" fill="${this.color}"/>`
    }
}

class Square extends Shapes {
    render() {
        return `<rect width="300" height="300" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

//Export the classes to import from the other sources

module.exports = {Circle, Square, Triangle};