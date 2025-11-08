// union
type UserRole = "admin" | "user";

const getDashboard = (role: UserRole): void => {
    if(role == "admin") console.log("admin");
    if(role == "user") console.log("not admin");
}
getDashboard("admin")

// intersection
type Employee = {
    id: string;
    names: string;
}
type Manager = {
    designation: string;
    teamSize: number;
    names: string;
}

type Combination = Employee & Manager;
const forRupon: Combination = {
    id: "101",
    names: "hello",
    designation: "Dhaka",
    teamSize: 11,
}
console.log(forRupon)