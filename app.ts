// Dio banking 

// Nome, accountNumber
//depositar , sacar
import { CompanyAccount } from './class/CompanyAccount'
import {PeopleAccount} from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriela', 1234)
console.log(peopleAccount)
peopleAccount.deposit()
const companyAccount : CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit()

