// polymorphism
/*
Polymorphism - Same method name → different behaviors in child classes
Polymorphism means:
“Many forms” — a parent class method behaves differently in child classes.
*/

class Person {
    getSleep(){
        console.log(`I am a normal person, I sleep for 8h a day!`);
    }
}

class Student extends Person {
    getSleep(): void {
        console.log(`I am a student, I sleep for 12h a day!`);
    }
}

class Developer extends Person {
    getSleep(): void {
        console.log(`I am a developer, I sleep for 5h a day`);
    }
}

const getSleepingHours = (params: Person) => {
    params.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();
getSleepingHours(person3)





// example with shape
class Shape {
    getArea(){
        return 0;
    }
}
class Circle extends Shape {
    radius: number

    constructor(radius: number){
        super();
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    height: number
    width: number

    constructor(height: number, width: number){
        super()
        this.height = height
        this.width = width
    }

    getArea(): number {
        return this.height * this.width
    }
}
const getArea = (params: Shape) => {
    return params.getArea();
}
const shape1 = new Circle(10);
const shape2 = new Rectangle(4, 5);
const shape3 = new Shape();
console.log(getArea(shape3))

