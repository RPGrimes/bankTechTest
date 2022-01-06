class Transaction{
  constructor(balance, depositOrWithdraw, value) {
    this.transactionDate = new Date().toLocaleDateString('en-GB');
    this.transactionValue = value;
    this.transactionDorW = depositOrWithdraw;
    this.newBalance = this.performTransaction(balance, depositOrWithdraw, value)
  }

  performTransaction(balance, depositOrWithdraw, value) {
    if (depositOrWithdraw === "deposit"){
      return balance += value
    } else if (depositOrWithdraw === 'withdraw'){
      return balance -= value
    } else {
      return `Balance is ${balance}. Transaction unsuccessful. Please enter either 'deposit' or 'withdraw'.`
    }
  }
    
};

module.exports = Transaction;