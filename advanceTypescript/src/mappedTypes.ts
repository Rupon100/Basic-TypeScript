// A Mapped Type lets you create new types by transforming the keys of an existing type.
// It’s like looping over each property of a type and changing something — its name, its optionality, or its value type.

const arrayOfNumber : number[] = [1,3,4];
const arrayOfString : string[] = ['1','3','4'];

const arrayOfStringUsingMap : string[] = arrayOfNumber.map(n => n.toString());
console.log(arrayOfStringUsingMap)


// mapped types
type AreaOfNum = {
    height: number;
    width: number;
}
type Area<T> = {
    [key in keyof T]: number;
}
const area1: Area<{height: string; width: string}> = {
    height: 50,
    width: 90,
}
console.log(area1)

// 2
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}
type PartialUser = {
    [k in keyof User]?: User[k] 
}

//3
type Stringify<T> = {
    [K in keyof T]: string;
}
type userStringified = Stringify<User>;
const user3: userStringified = {
    name: "Rupon",
    age: '17',
    isAdmin: 'true'
}
console.log(user3)

// mapped with nullable
type Nullable<T> = {
    [K in keyof T]: T[K] | null;
}
type NullableUser = Nullable<User>
const user4 = {
    name: null,
    age: 30,
    isAdmin: null,
}









// mapped -> utilities -> dld + eee + numerical




