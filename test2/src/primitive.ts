// string, number, bool, undefined, null
// TS special: never, unknown, void (never return anything)


let city: string | undefined;
city = "hablu";
console.log(city)

let x: number | null = null;
console.log(x)

// union types
let id: string | number;
id = 101;
id = "jjejje";
console.log(id);

type Status = "pending" | "progress" | "delivered";
let orderStatus: Status = "pending";
function updateStatus(status: Status): void{
    if(status === "delivered") console.log("Order Delivered!");
}
updateStatus("delivered");

// unknown is a type-safe version of any (i don't know what the type is yet, but i'll check it before using it)
let data: unknown = "TypeScript";
if(typeof data === "string"){
    console.log(data.toUpperCase());
}

let dataa: unknown;
dataa = 5;
dataa = "hello";
dataa = {name: "something"};
console.log(dataa.toUpperCase())

let a: any = "hello";
let b: unknown = "hello";

a.toUpperCase();  
b.toUpperCase();  


// never - means this code will never produce a value
function fail(msg: string): never{
    throw new Error(msg);
}