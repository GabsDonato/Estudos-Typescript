export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber

    }

    getName = (): string => {
        return this.name
    }

    deposit = (valor: number): void => {
        if(this.validateStatus()){
            this.balance += valor
            console.log(`${valor} efetuado com sucesso! Saldo atual é de: ${this.balance}`)
        }
    }

    withdraw = (valor: number): void => {
        if(this.validateStatus() && valor <= this.balance){
            this.balance -= valor 
            console.log(`Valor sacado é de: ${valor}! Saldo atual: ${this.balance}`)
        } else {
            console.log('Saldo insuficiente')
        }
        
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inativa')
    }
}