// access modifiers (public, private, protected)
// Access Modifiers control where you can access properties and methods of a class.

class BankAccount {
    readonly userId: number
    userName: string
    private balance: number // can not access-able from outside of the function
    protected loanBalance: number

    constructor(userId: number, userName: string, balance: number, loanBalance: number){
        this.userId = userId
        this.userName = userName
        this.balance = balance
        this.loanBalance = loanBalance
    }

    addBalance(addedBalance: number){
        this.balance+=addedBalance
    }

}

class StudentAccount extends BankAccount {
    constructor(userId: number, userName: string, balance: number, loanBalance: number){
        super(userId, userName, balance, loanBalance)
    }

    test(loan: number){
        this.loanBalance+=loan;
    }

}

const ruponAccount = new BankAccount(101, "Rupon", 120, 3000);
// ruponAccount.balance += 4000;
ruponAccount.addBalance(1000);
console.log(ruponAccount)

const studentAccount1 = new StudentAccount(202, "student", 20, 5000);
studentAccount1.test(2000);
console.log(studentAccount1)











