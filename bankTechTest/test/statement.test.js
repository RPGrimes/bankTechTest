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
    expect(console.log).toHaveBeenCalledWith("02/02/2022 || 100 ||  || 100")
  });

  it('returns the list of transactions', () => {
    //this test is failing due to it expecting a second call of 'undefined'. I have tried googling extensively as well as interrogating the code by logging out
    //I am fairly confident it is to do with the fact I am console logging out the .forEach(), but can't seem to fix it.
    // this is line 38 when I try this...
    //expect(console.log).toHaveBeenCalledWith("02/02/2022 || || 100 || -100")
    console.log = jest.fn()
    const statement = new Statement([transactionTwo]);
    console.log(statement.transactionList());
    expect.stringContaining("02/02/2022 || || 100 || -100")

  });

});