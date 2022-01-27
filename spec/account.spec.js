const Account = require("../src/account.js");

describe("Account", () => {
    let account;
    beforeEach(() => {
        account = new Account
    });
    it("can credit account", () => {
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
    });
});