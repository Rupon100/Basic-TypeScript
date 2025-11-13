// Type Assertion in TypeScript means telling the compiler “I know more about this value’s type than you do.”
// It does not change the runtime value, it only helps the TypeScript compiler understand how to treat that value.

let anything: any;
anything = "Rupon";
(anything as number);


let value: unknown = "Hello there";
let len = (value as string).length;
console.log(len);


const convertKgToGm = (input: string  | number): string | number | undefined => 
{
    if(typeof input === "number"){
        return `Measure: ${input * 1000}`;
    }else{
        const [ value ] = input.split(" ");
        return `After convert: ${Number(value) * 1000}`;
    } 
}
const result1 = convertKgToGm(2) as number;
const result2 = convertKgToGm("2 Kg") as string;
console.log(result1);
console.log(result2)



type CustomError = {
    message: string;
}
try {

}catch(err){
    console.log((err as CustomError).message)
}



 