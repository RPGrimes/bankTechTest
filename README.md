# bankTechTest :moneybag:

This is a practice tech test built in JavaScript and tested using the Jest testing framework.

## How to use up the application
Please do as the instructions stipulate below to use this code on your machine.
#### Set up
1. Download the contents of this repository to a local version
2. To download the latest version of npm, on the command line, run the following command: `npm install -g npm`
3. To initialise npm, enter `npm init -y`
4. To install jest, enter `npm install jest` in the project directory

# Run application
To use in Node, go to the root directory in the console and complete the following instructions within your command line:
1. Open Node.js with `node`
2. To require the account.js file, ebter: `const Account = require('./account.js')`;
3. To create a new bank account, enter: `const account = new Account;`
4. To deposit to the bank account (100 currency in this instance) into the bank account, enter: `account.newTransaction('deposit', 100)`;
5. To withdraw from the bank account (50 currency in this instance) into the bank account, enter: `account.newTransaction('withdraw', 50)`;
6. To view your bank account balance, enter: `account.showBalance()`;
7. To view a statement showing all transactions previously carried out on the account, enter: `account.viewStatement()`


## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```