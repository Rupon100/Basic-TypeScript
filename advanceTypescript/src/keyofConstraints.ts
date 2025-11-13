// keyof : type operator
type RichPeopleVehicle = {
    car: string, // key - value
    bike: string,
    cng: string
}
type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof RichPeopleVehicle;
const mtVehicle: myVehicle2 = "car"




// keyof constraints
type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}
const user: User = {
    id: 222,
    name: 'Rupon',
    address: {
        city: 'ctg'
    }
}
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
}
const result = getPropertyFromObj(user, "id")
console.log(result)

const product = {
    brand: 'Hp'
}
const result2 = getPropertyFromObj(product, 'brand')
console.log(result2)

const student = {
    id: 202,
    class: 14,
}
const result3 = getPropertyFromObj(student, "class");
console.log(result3)


  