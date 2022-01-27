const Transaction = require("./transaction.js");

class Account {
    constructor(balance = 0) {
        this.balance = balance
        this.transactions = []
        this.overdraft = 0
        this.date = new Date().toLocaleDateString()
    }

    setDate(YYYY, MM, DD) {
        this.date = new Date(`${YYYY}, ${MM}, ${DD}`).toLocaleDateString('en-UK')
    }

    deposit(amount) {
        if (amount < 0){
      throw new Error(`can't deposit negative amount "${amount}"`)
    }
    this.transactions.push(new Transaction(this.date, amount))
    this.balance += amount
    }
    withdraw(amount) {
        if (amount < 0){
            throw new Error(`can't withdraw negative amount "${amount}"`)
        }
        if (this.balance - amount < this.overdraft){
            throw new Error("overdraft limit reached")
        }
        this.transactions.push(new Transaction(this.date, 0-amount))
        this.balance -= amount
    }
}
module.exports = Account