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
        console.log(`${transaction.transactionDate} || ${(transaction.transactionDorW == "deposit") ? transaction.transactionValue : ""} || ${(transaction.transactionDorW == "withdraw") ? transaction.transactionValue : ""} || ${transaction.newBalance}`
      )}
    )
  };
};

module.exports = Statement;