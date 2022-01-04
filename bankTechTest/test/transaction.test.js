const Transaction = require('../src/transaction.js')

describe("transaction", () => {


  it('deposits 50 and adds to the balance', () => {
    const transaction = new Transaction(100, 'deposit', 50)
    expect(transaction).toEqual({"newBalance": 150, "transactionDate": "04/01/2022", "transactionDoW": "deposit", "transactionValue": 50});
  });

  it('withdraws 50 and subtracts to the balance', () => {
    const transaction = new Transaction(100, 'withdraw', 50)
    expect(transaction).toEqual({"newBalance": 50, "transactionDate": "04/01/2022", "transactionDoW": "withdraw", "transactionValue": 50});
  });
});