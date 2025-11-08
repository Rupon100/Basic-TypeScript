// // array
// // ts - tuple

// let bazarList : string[] = ['Egg', 'Milk', 'Sugar'];
// bazarList.push(true)

// let mixedArray : ( string | number )[] = ['eggs', 12, 'milk', 1, 'sugar', 1];
// mixedArray.push("orange");
// mixedArray.push(99);



// // tuple
// let coordinates : [number, number] = [20,30]
// let couple : [string, string] = ['husband', 'wife']
// let ruponNameAndRoll : [string, number] = ['Rupon', 18];
// let destination:[string, string, number] = ['Dhaka', 'Chattogram', 3]

 type User = [id: number, name: string, isActive: boolean];
 const users: User = [23, 'hello', false];

 function fetchedData(): [number, string]{
    return [200, 'ok'];
 }
 const [statusCode, message] = fetchedData();

// // object - reference type
// // const user : {
// //     organization: "Spider Man Olgo"; // literal type because we use value as a type
// //     firstName: string;
// //     middleName?: string;
// //     lastName: string;
// //     isMarried: boolean;
// // } = {
// //     // organization: 'Programming hero',
// //     firstName: 'Jhankar',
// //     // middleName: 'Something',
// //     lastName: 'Mahboob',
// //     isMarried: true
// // }
// // // user.organization = "level hire fire";
// // console.log(user);



const user : {
    readonly organization: string; // access modifier (read only)
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    organization: 'Programming hero',
    firstName: 'Jhankar',
    // middleName: 'Something',
    lastName: 'Mahboob',
    isMarried: true
}

// // user.organization = "level hire fire";
// console.log(user);
