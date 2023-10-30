class Shape {
    constructor(title) {
        this.title = title;
    }

    area() {
        // ??? не совсем понял. разные фигуры имеют разные формулы вычисления площали и периметра. пусть будет пустой метод, что бы было что наследовать. с периметром то же самое
        return "area";
    }

    perimetr() {
        // ???
        return "preimetr";
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimetr() {
        return (this.width + this.height) * 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getPerimetr() {
        return 2 * (Math.PI * this.radius)
    }
}

class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea() {
        return 1 / 2 * sideA * sideB * Math.sin((sideC * Math.PI) / 180);
    }

    getPerimetr() {
        return sideA + sideB + sideC;
    }
}