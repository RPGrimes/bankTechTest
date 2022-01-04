const Account = require('../src/account.js')

describe("account", () => {
  
  it('has a default balance of 0', () => {
    const account = new Account;
    expect(account.showBalance()).toBe(0);
  });

  it('can make a deposit', () => {
    const account = new Account;
    account.deposit(500)
    expect(account.showBalance()).toBe(500);
  });

  it('can withdraw from the balance', () => {
    const account = new Account;
    account.deposit(500)
    account.withdraw(100)
    expect(account.showBalance()).toBe(400);
  });
});