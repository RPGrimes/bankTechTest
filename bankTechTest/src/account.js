class Account{
  constructor(openingBalance = 0) {
    this.balance = openingBalance
  }

  showBalance() {
    return this.balance
  }
};

module.exports = Account;