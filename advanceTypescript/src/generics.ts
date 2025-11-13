// Generics allow you to create reusable and type-safe components (functions, classes, interfaces, etc.)
// They let you write code that works with any type, while still preserving type information.
// Think of generics like “type variables” — placeholders for types.



type GenericsArray<T> = Array<T>;
const isEligible: GenericsArray<boolean> = [true, false, true];
const names: GenericsArray<string> = ["baten", "mojumder", "under"];
const numbers: GenericsArray<number> = [2,3,4,5];


type Coordinates<x, y> = [x, y];
const coordinates1: Coordinates<string, string> = ['20','30'];
const coordinates2: Coordinates<number, number> = [220,30];



const userList: GenericsArray<{name: string, age: number}> = [
    {
        name: 'Rupon Mia',
        age: 18,
    },
    {
        name: 'Mia',
        age: 17
    }
]



// Generics with interface
interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand :string;
        model: string;
        releasedDate: string;
    };
    smartWatch: T;
    bike?: X
}

interface PoorBrand {
    heartRate: string;
    stopWatch: boolean;
}

const poorDeveloper: Developer<PoorBrand, { brand: 'yamaha', engine: '250CC' }> = {
    name: 'Rupon',
    salary: 2000,
    device: {
        brand: 'Lava',
        model: 'Intel',
        releasedDate: '12 December'
    },
    smartWatch: {
        heartRate: 'Ok',
        stopWatch: true
    }
}
console.log(poorDeveloper)


interface RichDeveloperModel {
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeature: boolean;
}
const RichDeveloper: Developer<RichDeveloperModel> = {
    name: 'Mia vai',
    salary: 900000,
    device: {
        brand: 'Mac',
        model: 'Apple',
        releasedDate: '2025'
    },
    smartWatch: {
        heartRate: 'Ok',
        callSupport: false,
        calculator: true,
        aiFeature: true
    }
}
console.log(RichDeveloper)

//
interface Box<T> {
    item: T;
    getItem: () => T;
}
const stringBox: Box<string> = {
    item: "Book",
    getItem: () => "Book"
}

// 
type Pair<T, U> = {
    first: T;
    second: U;
}
const pair: Pair<string, number> = {
    first: "Abdul",
    second: 12
}


// generics with constraints
interface HasId {
    id: number;
}
const printId = <T extends HasId>(obj: T) => {
    console.log(obj.id)
}
printId({id: 101, name: "Kala vai"})





// Generics - function
// // normal functionality
// const cerateArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObject = (value: {id: number; name: string}) => {
//     return [value]
// }
// const arrString = cerateArrayWithString("Rupon Mia");
// const numString = createArrayWithNumber(1345);
// const arrObj = createArrayWithUserObject({
//     id: 101,
//     name: "Rupon Mia"
// })
// console.log(arrString, numString)
// console.log(arrObj)

// now create this with generics
const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}
const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(123);
const arrObj = createArrayWithGeneric({
    id: 101,
    name: 'Next Level'
})

// tuple
const createArrayWithTuple = (param1: {id: number, name: string}, param2: string) => [param1, param2];

const createArrayTupleWithGenerics = <X, Y>(param1: X, param2: Y) => [param1, param2]
const res1 = createArrayTupleWithGenerics('Rupon', false);
const res2 = createArrayTupleWithGenerics(222, {name: 'Rupon Mia'});


// function
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: 'Next Level',
        ...studentInfo
    }
}

const student1 = {
    id: 101,
    hasPen: false,
}
const student2 = {
    id: 501,
    hasCar: true,
    isMarried: true
}
const result = addStudentToCourse(student2);
console.log(result)




