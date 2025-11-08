// // function
// // arrow function, normal function

// function add(n1: number, n2: number) : number // that means that will return number type
// {
//     return n1 + n2;
// }
// const addArrow = (num1: number, num2: number) => num1 + num2;
// addArrow(4,9);

function add(a: number, b: number): number{
    return a + b;
}

function greet(name: string): void{
    console.log(`Hello ${name}`);
}


type MathOperation = (a: number, b: number) => number;
const added: MathOperation  = (a, b) => a+b;
const sub: MathOperation = (a,b) => a-b;

// // object => function => method
// const poorUser = {
//     name: 'Rupon', 
//     balance: 0,
//     addBalance(value: number): number{
//         return this.balance + value;
//     }
// }
// poorUser.addBalance(1000);

// // callback function
// const arr: number[] = [1,2,3,4];
// const squareArray = arr.map((n: number) : number => n * n);