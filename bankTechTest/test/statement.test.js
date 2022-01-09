const Statement = require('../src/statement.js')

describe("statement", () => {

  const transactionOne = {
    transactionDate: "02/02/2022",
    transactionValue: 100,
    transactionDorW: 'deposit',
    newBalance: 100
  };

  const transactionTwo = {
    transactionDate: "02/02/2022",
    transactionValue: 100,
    transactionDorW: 'withdraw',
    newBalance: -100
  };

  it('returns the statement headers', () => {
    const statement = new Statement;
    expect(statement.statementHeaders()).toBe("date || credit || debit || balance");
  });

  it('returns the list of transactions', () => {
    console.log = jest.fn()
    const statement = new Statement([transactionOne]);
    console.log(statement.transactionList());
    expect(console.log).toHaveBeenCalledWith("02/02/2022 || 100.00 ||  || 100.00")
  });

  it('returns the list of transactions', () => {
    console.log = jest.fn()
    const statement = new Statement([transactionTwo]);
    console.log(statement.transactionList());
    expect.stringContaining("02/02/2022 || || 100.00 || -100.00")

  });

});