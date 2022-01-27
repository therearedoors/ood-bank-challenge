class Account {
    constructor(balance = 0) {
        this.balance = balance
        this.transactions = []
    }

    deposit(amount) {
        if (amount < 0){
      throw new Error("")
    }
    this.balance += amount
  }
}
module.exports = Account