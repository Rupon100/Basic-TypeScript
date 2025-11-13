// oop - class >>> object
/*
Class: a class is a blueprint for creating objects. it defines the properties and methods that the object will have. 
Object: an object is a instance of a class, it created using "new" keyword
*/

// class Animal {
//     name: string
//     species: string
//     sound: string


//     constructor(name: string, species: string, sound: string){
//         this.name = name
//         this.species = species
//         this.sound = sound
//     }

//     makeSound(){
//         return `${this.name} sound is: ${this.sound}`;
//     }
    
// }

// const dog = new Animal("Muna", "human", "rupon rupon");
// const cat = new Animal("halo", "balo", "mew mew");
// console.log(cat.makeSound())





// parameter properties
class Animal {
    // public property define and initialize at once 
    constructor(public name: string, public species: string, public sound: string){
        
    }

    makeSound(){
        return `${this.name} sound is: ${this.sound}`;
    }
    
}

const dog = new Animal("Muna", "human", "rupon rupon");
const cat = new Animal("halo", "balo", "mew mew");
console.log(cat.makeSound())



