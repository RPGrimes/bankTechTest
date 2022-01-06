const Transaction = require('../src/transaction.js');
const Statement = require('../src/statement.js');

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
    this.addToList(transaction);
    this.balance = transaction.newBalance; //single responsibility principle - come back and revise this later transaction.updatedBalance() ??? <-- try this later
  };

  initializeNewTransaction(depositOrWithdraw, value){
    return new Transaction(this.balance, depositOrWithdraw, value)
  }

  addToList(transaction){
    this.transactionList.push(transaction);
  }

  viewStatement(){
    let statement = new Statement(this.transactionList);
    console.log(statement.statementHeaders());
    statement.transactionList();
  }

  //   additional feature that could be added where the user can view individual transactions - not in the specification so not included in submission

  // viewTransaction(transactionNumber){
  //     if (transactionNumber <= this.transactionList.length && transactionNumber > 0){
  //       return this.transactionList[transactionNumber - 1];
  //   } else {
  //       return "Please enter a valid transaction number"
  //   }
  // };

};

module.exports = Account;