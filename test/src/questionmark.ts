// ternary, nullish coalescing & optional chaining

function getDiscount(price: number): number{
    return price > 100 ? price*0.90 : price;
}
console.log(getDiscount(120))

// ?? means “use the right-hand value only if the left-hand value is null or undefined"
let username: string | null = null;
let displayName = username ?? "Guest";
console.log(displayName);

let count: number | undefined = undefined;
let total = count ?? 0;


let value1 = 0 || 10; // 10  (0 is falsy)
let value2 = 0 ?? 10; // 0   (0 is NOT null/undefined)


type User = {
  profile?: {
    contact?: {
      email?: string;
    };
  };
};

const u1: User = {};
const email = u1.profile?.contact?.email ?? "No email provided";

console.log(email); // "No email provided"
