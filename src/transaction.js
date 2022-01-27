class Transaction {
    constructor(date, amount, balance = 0){
        this.date = date
        this.credit = amount > 0 ? amount : 0
        this.debit = amount < 0 ? Math.abs(amount) : 0
        this.balance = balance + this.credit - this.debit
    }


}
module.exports = Transaction