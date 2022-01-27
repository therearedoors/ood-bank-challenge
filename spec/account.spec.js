const Account = require("../src/account.js");
const Transaction = require("../src/transaction.js");

describe("Account", () => {
    let account;
    beforeEach(() => {
        account = new Account
    });
    it("can credit account", () => {
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
    });

    it("can't credit or deposit a negative value and throws error", () => {
        const creditError = new Error(`can't deposit negative amount "-1"`)
        const debitError = new Error(`can't withdraw negative amount "-1"`)
        const testCredit = () => account.deposit(-1)
        const testDebit = () => account.withdraw(-1)
        expect(testCredit).toThrow(creditError);
        expect(testDebit).toThrow(debitError);
    });

    it("can debit account", () => {
        account.deposit(1100);
        account.withdraw(500);
        expect(account.balance).toEqual(600);
    });

    it("can't debit beyond overdraft limit", () => {
        const error = new Error("overdraft limit reached")
        const testDebit = () => account.withdraw(500);
        expect(testDebit).toThrow(error);
    });

    it("can set a different date", () => {
        account.setDate(2012, 01, 14)
        expect(account.date).toEqual("14/01/2012")
    });

    it("stores transactions", () => {
        const date = account.date
        expected = [new Transaction(date, 1000), new Transaction(date, 2000), new Transaction(date, -500)]
        account.deposit(1000);
        account.deposit(2000);
        account.withdraw(500);
        result = account.transactions
        expect(expected).toEqual(result)
    });

});