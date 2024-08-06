#! /usr/bin/env node
interface MyBankAccount {
  credit(amount: number): void;
  debit(amount: number): void;
  getAccountBalance(): number;
}

class BankAccount implements MyBankAccount {
  private accountBalance: number;

  constructor(accountBalance: number) {
    this.accountBalance = accountBalance;
  }

  public credit(amount: number): void {
    if (amount > 0) {
      console.log(`Attempting to credit ${amount}...`);
      this.accountBalance += amount;
      console.log("Credit Successful!");
    } else {
      console.log("Credit Unsuccessful! Please provide a valid positive amount.");
    }
  }

  public debit(amount: number): void {
    if (amount > 0 && amount <= this.accountBalance) {
      console.log(`Attempting to debit ${amount}...`);
      this.accountBalance -= amount;
      console.log("Debit Successful!");
    } else {
      console.log("Debit Unsuccessful! Insufficient balance or invalid amount.");
    }
  }

  public getAccountBalance(): number {
    return this.accountBalance;
  }
}

class Customer {
  constructor(
    public fullname: string,
    public age: number,
    public gender: string,
    private bankAccount: BankAccount
  ) {}

  public displayDetails(): void {
    console.log(`Name: ${this.fullname}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Balance: ${this.bankAccount.getAccountBalance()}`);
  }

  public displayBalance(): void {
    console.log(`Your Balance: ${this.bankAccount.getAccountBalance()}`);
  }

  public performCredit(amount: number): void {
    console.log(`Performing credit operation...`);
    this.bankAccount.credit(amount);
    this.displayBalance(); 
  }

  public performDebit(amount: number): void {
    console.log(`Performing debit operation...`);
    this.bankAccount.debit(amount);
    this.displayBalance(); 
  }
}


const userAmount1 = new BankAccount(3000);
const userInput1 = new Customer("Wania Azam", 16, "female", userAmount1);
userInput1.displayDetails(); 
userInput1.performCredit(200); 
console.log();

const userAmount2 = new BankAccount(1500);
const userInput2 = new Customer("Anabia Rashid", 13, "female", userAmount2);
userInput2.displayDetails(); 
userInput2.performDebit(500); 
console.log();

const userAmount3 = new BankAccount(1000);
const userInput3 = new Customer("Anosha Abid", 15, "female", userAmount3);
userInput3.displayDetails(); 
userInput3.performDebit(1000); 
console.log();
