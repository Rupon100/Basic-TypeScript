// Inheritance - inheritance means one class can inherit properties and methods from another class

class Parent {
    name: string // common
    age: number // common
    address: string // common


    constructor(name: string, age: number, address: string){
        this.name = name
        this.age = age
        this.address = address
    }

    // common
    getSleep(hours: number){ // hours is a outer property
        console.log(`${this.name} ${hours} gonta ghumai`);
    }
}


class Student extends Parent {
   

}
const student1 = new Student("Muna", 23, "Doulatpur");
student1.getSleep(4)






class Teacher extends Parent {
    designation: string // extra property

    constructor(name: string, age: number, address: string, designation: string){
       
        super(name, age, address); // we send back this to parent because those are parents value
        
        this.designation = designation
    }

    // own and extra method
    takeClass(hours: number){
        console.log(`${this.name} ${hours} hours class ney!`)
    }

}
const teacher1 = new Teacher("Ismail", 23, "bedamari", "Senior teacher");
teacher1.takeClass(4);







// 
class Person {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    greet(): void{
        console.log(`Hi! I am ${this.name}, i am ${this.age} years old!`);
    }
}

class ShopKiper extends Person {

}
const shopKiper1 = new ShopKiper("Rupon", 123);
shopKiper1.greet()


class RickshawPullar extends Person {
    salary: number

    constructor(name: string, age: number, salary: number){
        super(name, age); // call the parent class constructor using 'super'
        this.salary = salary;
    }

    // now new method
    salaryEarn(): void{
        console.log(`${this.name} earns ${this.salary} Taka`)
    }
    
}
const rickshaw1 = new RickshawPullar("Rickshaw wala", 30, 3000);
rickshaw1.salaryEarn();
 



