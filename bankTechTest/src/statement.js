class Statement {

  constructor(listOfTransactions){
    this.listOfTransactions = listOfTransactions;
  };

  statementHeaders(){
    return "date || credit || debit || balance";
  };

  transactionList(){
      let list = this.listOfTransactions.reverse()
      list.forEach(transaction => {
        console.log(`${transaction.transactionDate} || ${(transaction.transactionDorW == "deposit") ? transaction.transactionValue.toFixed(2) : ""} || ${(transaction.transactionDorW == "withdraw") ? transaction.transactionValue.toFixed(2) : ""} || ${transaction.newBalance.toFixed(2)}`
      )}
    )
  };
};

module.exports = Statement;