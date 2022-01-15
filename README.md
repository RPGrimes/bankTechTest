# bankTechTest :moneybag:

This app logs deposits and withdrawals from a bank account and is to be used within the command line using Node.js.

## App Demo

![bankTechTest](https://user-images.githubusercontent.com/75947453/149624797-691fb0f6-2ca6-4c70-84c1-27172b255149.gif)

### Testing 

<img width="673" alt="Screenshot 2022-01-15 at 15 16 09" src="https://user-images.githubusercontent.com/75947453/149624863-f5f067b1-b8db-4017-949a-40ea9adfda00.png">

## How to use up the application
Please do as the instructions stipulate below to use this code on your machine.
### Set up
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

#### User Stories
```
As a user
So that I have an account to store my money
I want to be able to open a new account

As a user
So I can make add money to my account
I want to be able to make a deposit

As a user
So I can take my out of my account
I want to be able to make a withdrawal

As a user
So I can see a history of transactions
I want to be able to see an account statement
```
