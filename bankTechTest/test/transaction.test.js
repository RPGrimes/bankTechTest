const Transaction = require('../src/transaction.js')

describe("transaction", () => {

  it('deposits 50 and adds to the balance', () => {
    const transaction = new Transaction(100, 'deposit', 50)
    expect(transaction).toEqual({"newBalance": 150, "transactionDate": new Date().toLocaleDateString('en-GB'), "transactionDorW": "deposit", "transactionValue": 50});
  });

  it('withdraws 50 and subtracts to the balance', () => {
    const transaction = new Transaction(100, 'withdraw', 50)
    expect(transaction).toEqual({"newBalance": 50, "transactionDate": new Date().toLocaleDateString('en-GB'), "transactionDorW": "withdraw", "transactionValue": 50});
  });


  it('notifies the user when a transaction cannot be completed', () => {
    const transaction = new Transaction(0, 'make breakfast', 50)
    expect(transaction).toEqual({"newBalance": "Balance is 0. Transaction unsuccessful. Please enter either 'deposit' or 'withdraw'.", "transactionDate": new Date().toLocaleDateString('en-GB'), "transactionDorW": "make breakfast", "transactionValue": 50});
  });
});