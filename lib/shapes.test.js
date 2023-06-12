const { Circle, Square, Triangle } = require('./shapes');


// Test for circle function with green background
describe('Circle', () => {
    it('should return a circle with a green background', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toBe('<circle cx="150" cy="150" r="150" fill="green"/>');
    });   
});

// Test for square function with red background
describe('Square', () => {
    it('should return a square with a red background', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toBe('<rect width="300" height="300" fill="red"/>');
    });
});

// Test for triangle function with blue background
describe('Triangle', () => {
    it('should return a triangle with a blue background', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
});


