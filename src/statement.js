class Statement {
    constructor(){
    this.header = "date       || credit  || debit  || balance"
    this.div = ' || '
    this.columnSizes = {
        "credit": 0,
        "debit": 0,
        "balance": 0
        }
    this.whiteSpaceVal = 7
    }

    determineColumnSizes(transactions){
        for (const transaction of transactions){
            for (const column in this.columnSizes){
        this.columnSizes[`${column}`] = Math.max(String(transaction[`${column}`]).length,this.columnSizes[`${column}`])
            }
        }
    }

    print(transactions) {
        this.determineColumnSizes(transactions)
        let str = this.header
        str += transactions.reduce((str,transaction) => str + this.getLine(transaction), "");
        return str
    }

    getLine(transaction) {
        let str = `\n${transaction.date}`
        for (const column in this.columnSizes){
        str += `${this.padColumnContent(transaction[`${column}`], this.columnSizes[`${column}`])}`
        }
        return str;
    }

    padColumnContent(number, columnSize){
        const string = `${this.div}${Number(number).toFixed(2)}`
        if (number > 0) return string;
        return `${this.div}`.padEnd(columnSize+this.whiteSpaceVal, ' ')
    }

}

module.exports = Statement
