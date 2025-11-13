// Getter | Setter
// Getter(get) - Used to read a private property
// Setter(set) - Used to update or validate a private property


class BankAccount {
    readonly userId: number
    userName: string
    public balance: number // can not access-able from outside of the function

    constructor(userId: number, userName: string, balance: number){
        this.userId = userId
        this.userName = userName
        this.balance = balance
        
    }

    // // set balance
    // addBalance(addedBalance: number){
    //     return this.balance+=addedBalance
    // }
    // do using setter
    set addBalance(value: number){
        this.balance+=value; // set function automatically return value
    }

    // // get balance
    // getBalance(){
    //     return this.balance;
    // }
    // do using getter
    get getBalance(){
        return this.balance; // get need to return a value
    }

}

 

// const ruponAccount = new BankAccount(101, "Rupon", 120);
// ruponAccount.addBalance(10); // for set function call
// console.log(ruponAccount)
// console.log(ruponAccount.getBalance()); // for get function call


const ruponsAccount = new BankAccount(909, "Islam", 30)
ruponsAccount.addBalance = 300;
console.log(ruponsAccount)
console.log(ruponsAccount.getBalance) // no need to call now
 












