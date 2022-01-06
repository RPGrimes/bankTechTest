const Account = require('../src/account.js')

describe("account", () => {
  beforeEach(function() {
    account = new Account;
  })

  const transactionOne = {
    transactionDate: "02/02/2022",
    transactionValue: 100,
    transactionDorW: 'deposit',
    newBalance: 100
  };
  
  it('has a default balance of 0', () => {
    expect(account.showBalance()).toBe(0);
  });

  it('adds a transaction to the list', () => {
    account.newTransaction(transactionOne.transactionDorW, transactionOne.transactionValue);
    expect(account.transactionList).toEqual([{"newBalance": 100, "transactionDate": new Date().toLocaleDateString('en-GB'), "transactionDorW": "deposit", "transactionValue": 100}]);
  });

  it('returns the list of transactions', () => {
    console.log = jest.fn();
    account.newTransaction(transactionOne.transactionDorW, transactionOne.transactionValue);
    console.log(account.viewStatement());
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
  });

  //additional feature that could be added where the user can view individual transactions - not in the specification so not included in submission

  // it('returns a transaction based on the order number', () => {
  //   account.newTransaction(transactionOne.transactionDorW, transactionOne.transactionValue);
  //   expect(account.viewTransaction(1)).toEqual({"newBalance": 100, "transactionDate": new Date().toLocaleDateString('en-GB'), "transactionDorW": "deposit", "transactionValue": 100});
  // })

  // it('returns an error due to invalid transaction number', () => {
  //   account.newTransaction(transactionOne.transactionDorW, transactionOne.transactionValue);
  //   expect(account.viewTransaction(10)).toEqual("Please enter a valid transaction number");
  // })

});