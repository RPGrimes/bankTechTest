const Account = require('../src/account.js')

describe("account", () => {
  const account = new Account;
  it('has a default balance of 0', () => {
    expect(account.showBalance()).toBe(0);
  });
});