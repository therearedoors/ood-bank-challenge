class Statement {
    constructor(){
    this.header = "date       || credit  || debit  || balance"
    this.div = ' || '
    this.rowSizes = []
    }

    determineRowSizes(transactions){
        const rowSizes = [0,0,0]
        for (const transaction of transactions){
        rowSizes[0] = Math.max(String(transaction.credit).length,rowSizes[0])
        rowSizes[1] = Math.max(String(transaction.debit).length,rowSizes[1])
        rowSizes[2] = Math.max(String(transaction.balance).length,rowSizes[2])
        this.rowSizes = rowSizes
        }
    }

    print(transactions) {
        this.determineRowSizes(transactions)
        let str = this.header
        str += transactions.reduce((str,transaction) => str + this.getLine(transaction), "");
        return str
    }

    getLine(transaction) {
        let str = `\n${transaction.date}`
        str += `${this.stringifyNumber(transaction.credit, this.rowSizes[0])}`
        str += `${this.stringifyNumber(transaction.debit, this.rowSizes[1])}`
        str += `${this.stringifyNumber(transaction.balance, this.rowSizes[2])}`
        return str;
    }

    stringifyNumber(number, rowSize){
        const string = `${this.div}${Number(number).toFixed(2)}`
        if (number > 0) return string;
        return `${this.div}`.padEnd(rowSize+7, ' ')
    }

}

module.exports = Statement