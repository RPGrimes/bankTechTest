const Account = require('../src/account.js')

describe("account", () => {
  
  it('has a default balance of 0', () => {
    const account = new Account;
    expect(account.showBalance()).toBe(0);
  });

});