class Account{
  constructor() {
    this.balance = 0
  }

  showBalance() {
    return this.balance
  }

  deposit(value) {
    this.balance += value
  }

  withdraw(value) {
    this.balance -= value
  }
};

module.exports = Account;