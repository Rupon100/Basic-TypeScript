// A conditional type lets you choose one type or another,
// based on a condition between types — kind of like an if...else for types.




type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false

type HasBike = CheckVehicle<"car">




// condition type in action with function
type ReturnTypeByInput<T> = T extends number ? number : string;
const processValue = <T>(value: T): ReturnTypeByInput<T> => {
    
}
 

