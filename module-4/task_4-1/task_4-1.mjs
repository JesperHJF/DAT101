"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};
printOut(Object.values(AccountType).join(", "));
printOut(newLine);

// Singleton class for the shared account instance
class TAccountSingleton {
    constructor(type = AccountType.Normal) {
        if (!TAccountSingleton.instance) {
            TAccountSingleton.instance = new TAccount(type); // Create a single shared account instance
        }
        return TAccountSingleton.instance;
    }
}

// Part 2: Basic Bank Account (15 points)
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

class TAccount {
    constructor(type) {
        this._type = type;
    }

    toString() {
        return this._type;
    }

    setType(newType) {
        printOut("Account is changed from " + this._type + " to " + newType);
        this._type = newType;
    }
}

// Using the singleton pattern to create and share `myAccount` instance
let myAccount = new TAccountSingleton(AccountType.Normal);
printOut("myAccount = " + myAccount.toString());

// Change the account type to "Sparekonto"
myAccount.setType(AccountType.Saving);
printOut("myAccount = " + myAccount.toString());
printOut(newLine);

// Part 3: Extended Account with Balance
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

class TAccount2 extends TAccount {
    constructor(type) {
        super(type);
        this._balance = 0;
    }

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
        printOut("Deposited " + amount + ", new balance is " + this._balance);
    }

    withdraw(amount) {
        this._balance -= amount;
        printOut("Withdrew " + amount + ", new balance is " + this._balance);
    }
}

// Extend the singleton to use the TAccount2 features for balance and transactions
TAccountSingleton.instance = new TAccount2(myAccount._type);
myAccount = TAccountSingleton.instance; // Re-assign `myAccount` to point to the updated singleton

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance());
printOut(newLine);

// Part 4: Adding Withdrawal Limits by Account Type
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

class TAccount3 extends TAccount2 {
    constructor(type) {
        super(type);
        this._withdrawCount = 0;
    }

    withdraw(amount) {
        switch (this._type) {
            case AccountType.Saving:
                if (this._withdrawCount >= 3) {
                    printOut("You can't withdraw from a Sparekonto more than three times!");
                } else {
                    this._balance -= amount;
                    this._withdrawCount++;
                    printOut("Withdrawal of " + amount + ", new balance is " + this._balance);
                }
                break;
            case AccountType.Pension:
                printOut("You can't withdraw from a Pensionskonto!");
                break;
            default:
                this._balance -= amount;
                printOut("Withdrawal of " + amount + ", new balance is " + this._balance);
        }
    }
}

// Update the singleton to use the features in TAccount3
TAccountSingleton.instance = new TAccount3(myAccount._type);
myAccount = TAccountSingleton.instance; // Update `myAccount` to the latest instance

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);

myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);

myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);
printOut(newLine);

// Part 5: Additional Account Functionality with Enhanced Tracking
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

class TAccount5 extends TAccount3 {
    setType(newType) {
        super.setType(newType);
        this._withdrawCount = 0; // Reset the withdrawal count when account type is changed
    }
}

// Use the TAccount5 class for the final part
TAccountSingleton.instance = new TAccount5(myAccount._type);
myAccount = TAccountSingleton.instance; // Update `myAccount` reference

myAccount.deposit(150);
printOut("Deposit of 150kr, new balance is " + myAccount.getBalance() + "kr");
printOut(myAccount.toString());
printOut(newLine);

// Part 6: Currency Conversion and Handling Balances in Different Currencies
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    SEK: { value: 1.0580, name: "Svenska kroner", denomination: "kr" },
    USD: { value: 10.91, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0881, name: "Pound sterling", denomination: "£" },
    CAD: { value: 0.1487, name: "Canadiske dollar", denomination: "C$" },
    INR: { value: 9.0874, name: "Indiske rupee", denomination: "₹" }
};

// Function to convert between currencies
function currencyConvert(fromCurrency, toCurrency) {
    return fromCurrency.value / toCurrency.value;
}

class TAccount6 {
    constructor() {
        this.privateType = "NOK";
        this.privateBalance = 150; // Starting balance in NOK
        this.privateWithdrawCount = 0;
        this.privateCurrencyType = CurrencyTypes.NOK;
    }

    toString() {
        return `Private type: ${this.privateType} Private balance: ${this.privateBalance.toFixed(2)} Private withdrawCount: ${this.privateWithdrawCount} Private currencyType: ${this.privateCurrencyType.name}`;
    }

    setCurrencyType(aType) {
        printOut(`The account currency has changed from ${this.privateCurrencyType.name} to ${aType.name}`);
        
        // Adjust the balance according to the conversion rate
        const conversionRate = currencyConvert(this.privateCurrencyType, aType);
        this.privateBalance *= conversionRate;

        // Update currency type and type name
        this.privateCurrencyType = aType;
        this.privateType = aType.name;
        
        // Print new balance with proper formatting
        printOut(`New balance is ${this.privateBalance.toFixed(2)}${aType.denomination}`);
    }

    deposit(aAmount) {
        const conversionRate = currencyConvert(this.privateCurrencyType, CurrencyTypes.NOK);
        this.privateBalance += aAmount * conversionRate; // Adjust deposit based on currency conversion
        printOut(`Deposited ${aAmount.toFixed(2)}${this.privateCurrencyType.denomination}, new balance is ${this.privateBalance.toFixed(2)}${this.privateCurrencyType.denomination}`);
    }

    withdraw(aAmount) {
        const conversionRate = currencyConvert(this.privateCurrencyType, CurrencyTypes.NOK);
        this.privateBalance -= aAmount * conversionRate; // Adjust withdrawal based on currency conversion
        this.privateWithdrawCount++;
        printOut(`Withdrew ${aAmount.toFixed(2)}${this.privateCurrencyType.denomination}, new balance is ${this.privateBalance.toFixed(2)}${this.privateCurrencyType.denomination}`);
    }
}

// Create a new TAccount instance and change currency
const account = new TAccount6();

// Change currency from Norwegian Krone to Swedish Krone
account.setCurrencyType(CurrencyTypes.SEK);

// Change currency from Swedish Krone to United States Dollar
account.setCurrencyType(CurrencyTypes.USD);

// Change currency from United States Dollar to Norwegian Krone
account.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

class TAccount7 {
    constructor() {
        this.privateType = "NOK";
        this.privateBalance = 0;
        this.privateWithdrawCount = 0;
        this.privateCurrencyType = CurrencyTypes.NOK;
    }

    toString() {
        return `Private type: ${this.privateType} Private balance: ${this.privateBalance.toFixed(2)} Private withdrawCount: ${this.privateWithdrawCount} Private currencyType: ${this.privateCurrencyType.name}`;
    }

    setCurrencyType2(aType) {
        printOut(`The account currency has changed from ${this.privateCurrencyType.name} to ${aType.name}`);
        this.privateBalance *= currencyConvert(this.privateCurrencyType, aType);
        this.privateCurrencyType = aType;
        printOut(`New balance is ${this.privateBalance.toFixed(2)}${this.privateCurrencyType.denomination}`);
    }

    deposit(aAmount, aType = CurrencyTypes.NOK) {
        const convertedAmount = aAmount * currencyConvert(aType, this.privateCurrencyType);
        this.privateBalance += convertedAmount;
        printOut(`Deposit of ${aAmount.toFixed(2)} ${aType.name}, new balance is ${this.privateBalance.toFixed(2)}${this.privateCurrencyType.denomination}`);
    }

    withdraw(aAmount, aType = CurrencyTypes.NOK) {
        const convertedAmount = aAmount * currencyConvert(aType, this.privateCurrencyType);
        if (this.privateBalance >= convertedAmount) {
            this.privateBalance -= convertedAmount;
            printOut(`Withdrawal of ${aAmount.toFixed(2)} ${aType.name}, new balance is ${this.privateBalance.toFixed(2)}${this.privateCurrencyType.denomination}`);
        } else {
            printOut("Insufficient funds for withdrawal.");
        }
    }
}

// Create a new instance for Task 7 demonstration
const myAccount2 = new TAccount7();

// Task 7 operations
myAccount2.deposit(12, CurrencyType2.USD);
myAccount2.withdraw(10, CurrencyType2.GBP);
myAccount2.setCurrencyType2(CurrencyType2.CAD);
myAccount2.setCurrencyType2(CurrencyType2.INR);
myAccount2.withdraw(150.11, CurrencyType2.SEK);

printOut(newLine);
