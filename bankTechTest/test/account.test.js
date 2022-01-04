const Account = require('../src/account.js')

describe("account", () => {
  
  it('has a default balance of 0', () => {
    const account = new Account;
    expect(account.showBalance()).toBe(0);
  });

  it('can complete a deposit transaction', () => {
    const account = new Account;
    account.newTransaction('deposit', 100);
    expect(account.showBalance()).toBe(100);
  });
  
  it('can complete a withdraw transaction', () => {
    const account = new Account;
    account.newTransaction('deposit', 100);
    account.newTransaction('withdraw', 10);
    expect(account.showBalance()).toBe(90);
  });

  

});