const Transaction = require('../src/transaction.js')

class Account{
  constructor(openingBalance = 0) {
    this.balance = openingBalance;
    this.transactionList = [];
  };

  showBalance() {
    return this.balance
  };

  newTransaction(depositOrWithdraw, value){
    let transaction = this.initializeNewTransaction(depositOrWithdraw, value);
    this.transactionList.push(transaction); //single responsibility principle - come back and revise this later
    this.balance = transaction.newBalance; //single responsibility principle - come back and revise this later
  };

  initializeNewTransaction(depositOrWithdraw, value){
    return new Transaction(this.balance, depositOrWithdraw, value)
  }

};

module.exports = Account;