// a type alias let us create a new name for any type

type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string
    };
    gender: 'male' | 'female';
    contact: string;
    address: {
        division: string;
        city: string;
    }
}

const user1: User = {
    id: 101,
    name: {
        firstName: "Rupon",
        lastName: "Mia"
    },
    gender: "male",
    contact: '0100003003',
    address: {
        division: 'Dhaka',
        city: 'Tejgoan'
    }
}
console.log(user1)


type isAdmin = true;
const IsAdmin: isAdmin = true;

type Name = string;
const myName: Name = "Hello";

// function
type AddType = (num1: number, num2: number) => number;
const add: AddType = (a,b) => a + b;