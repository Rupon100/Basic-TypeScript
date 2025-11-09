// nullable - A nullable type means a variable can hold either a normal value or null | undefined
const getUser = (input: string | null) => {
    if(input){
        console.log('user for', input);
    }else{
        console.log("ALl users!");
    }
}
getUser(null);

// unknown - It means “I don’t know the type yet” — but you must check it before using it.
const discountCalculator = (input: unknown) => {
    if(typeof input === 'number'){
        console.log('Discount price: ', input*0.90);
    }
    if(typeof input === 'string'){
        const num = input.split(" ")[0];
        console.log("Discount: ", Number(num)*0.90);
    }else{
        console.log('Wrong something!');
    }
}
discountCalculator(100)
discountCalculator('100 Tk')
discountCalculator(null)

function handleInput(data: unknown){
    if(typeof data == 'number'){
        console.log(data.toFixed(2));
    }
}


// void - never
const throwError = (msg: string): never => {
    throw new Error(msg);
}
throwError("erooorrooroor")

