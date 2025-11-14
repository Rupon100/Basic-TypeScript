// Encapsulation - 4th Pillar of OOP

// Encapsulation = bundling data + methods + protecting them from outside access.


class BankAccount {
    private balance: number;

    constructor(initialBalance: number){
        this.balance = initialBalance
    }

    set deposit(amount: number){
        this.balance+=amount
    }

    set withdraw(amount: number){
        if(amount > this.balance){
            console.log('Insufficient balance!');
            return;
        }
        this.balance-=amount
    }

    get getBalance(){
        return this.balance;
    }

}
const amount = new BankAccount(400);
console.log(amount.getBalance);
amount.deposit = 200
console.log(amount.getBalance);



