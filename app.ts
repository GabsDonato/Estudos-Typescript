import { CompanyAccount} from './class/CompanyAccount'
import {PeopleAccount} from './class/PeopleAccount'
import { NewAccount } from './class/NewAacount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriela', 1234)
console.log(peopleAccount)
peopleAccount.deposit(300)
console.log(peopleAccount.getID())
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(100)
console.log(peopleAccount.getBalance())
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.getLoan(240)
console.log(companyAccount.getBalance())
const newAacount: NewAccount = new NewAccount('joão', 23)
console.log(newAacount)
newAacount.deposit10(150)
console.log(newAacount.getBalance())


