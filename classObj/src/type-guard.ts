// type guard
//A Type Guard is a runtime check that tells TypeScript what specific type a value has at a given point.

// in - typeof


const add = (num1: string | number, num2: string | number) => {
    // return num1 + num2; // + cant be applicable because we optionally used number or string, 
    // now need to type narrow
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else{
        return num1.toString() + num2.toString();
    }
}
console.log(add(2,9))




// in guard
type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: 'Admin'
}
const getUserInfo = (user: NormalUser | AdminUser) => {

    if("role" in user){   
        console.log(`This ${user.name} & his role is: ${user.role}`)
    }else{
        console.log(`This ${user.name}`)
    }
}
getUserInfo({name: "Admin User", role: 'Admin'})







