// Dio banking 

// Nome, accountNumber
//depositar , sacar

class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Voce depositou')
    }

    withdraw = () => {
        console.log('voce sacou')
    }
}

const newAccount: Account = new Account('Gabriela', 1) 
console.log(newAccount)

const account: Account = new Account('Fabio',2)
account.deposit