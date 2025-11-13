// interface only for array type: array, object, function
// An interface defines the shape (structure) of an object — meaning what properties and methods it should have, along with their types.

// // object
// interface User {
//     age: number;
// }
// interface UserWithRole extends User { // this is like intersection in alias
//     role: 'admin' | 'user'
// }
// const user1: UserWithRole = {
//     age: 19,
//     role: 'admin'
// }
// console.log(user1)
 
 
interface friends {
    [index: number] : string;
}
const allFriends: friends = ['a','b','c'];
console.log(allFriends)


// // function 
// interface Add {
//     (numb1: number, num2: number) : number;
// }

// function type interface
interface Greet {
    (name: string): string;
}
const greetUser: Greet = (name) => {
    return `Hello ${name}`;
}
console.log(greetUser("Alex"));


interface Person {
    name: string;
    age: number;
    sayHi: (message: string) => string;
}
const person1: Person = {
    name: "Sidka",
    age: 18,
    sayHi: (msg) => `Hi ${msg}, I am ${person1.name}`
}
console.log(person1.sayHi("How are you!"));





















