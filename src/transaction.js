class Transaction {
    constructor(date, amount){
        this.date = date
        this.credit = amount > 0 ? amount : 0
        this.debit = amount < 0 ? 0 : amount
    }


}
module.exports = Transaction