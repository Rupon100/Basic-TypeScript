// OOP: instance of type guard / type narrowing
// instanceof checks whether an object is created from a specific class (or one that inherits from it).

class Person {
    name: string
    constructor(name: string){
        this.name = name
    }
    getSleep(hours: number){
        console.log(`${this.name} sleep ${hours}h per day!`)
    }
}

class Student extends Person {
    
    constructor(name: string){
        super(name);
    }

    doStudy(hours: number){
        console.log(`${this.name} every day study around ${hours}`);
    }

}

class Teacher extends Person {
    constructor(name: string){
        super(name);
    }
    takeClass(hours: number){
        console.log(`${this.name} take ${hours}h class every day!`);
    }
}


// we can do that using function guard
const isStudent = (user: Person) => {
    return user instanceof Student; // true false
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}


const getUserInfo = (user: Person) => { // we can use class as type, because class is a blueprint 
    if(isStudent(user)){ //  if(user instanceof Student)
        user.doStudy(8);
    }else if(user instanceof Teacher){ // now we can use there isTeacher()
        user.takeClass(10);
    }else{
        user.getSleep(14);
    }
}


// kuno class theke normal object create kora hole amra setake boli instance
const student1 = new Student("Rupon Mia");
const teacher1 = new Teacher("Kalam uddin");
const person1 = new Person("Zadu Mia");

getUserInfo(person1)








