"use strict";
//TODO: Import necessary values from account.js
const {balance} = require("./account");
const {pin} = require("./account");
const prompt = require("prompt-sync")();

function getBalance(Boolean) {
  if (Boolean === true){
  alert(balance)}
  else {
    alert("Invalid pin, please try again.");
    getBalance()} {
  }
  //TODO: Return the customer's acct. balance
}

function withdraw(withdrawAmount, Boolean) {
  let newBalance;
  if (Boolean === true){
    if (balance >= parseInt(withdrawAmount)){
      newBalance = balance - parseInt(withdrawAmount);
      alert("New current balance: " `${newBalance}`)
        return newBalance}
        else {
        alert("Withdraw amount exceeds current balance.  Please try again.");
        withdraw()
      }
    } else {
    alert("Invalid pin, please try again.");
    withdraw()
  }
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
}

function deposit(depositAmount, Boolean) {
  let newBalance;
  if (Boolean === true) {
    if (parseInt(depositAmount) > 0) {
      newBalance = balance + parseInt(depositAmount);
      alert("New current balance: " `${newBalance}`);
      return newBalance
    } else{
      alert("You must enter a positive number to deposit.  Please try again.");
      deposit()
    }
  } else {
    alert("Invalid pin, please try again.")
  }
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) {
  if (pin === enteredPin) {
    return true
  } else {
    return false
  }
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

//TODO: Export these functions
module.exports = {
    check: getBalance,
    subtract: withdraw,
    add: deposit,
    verify: validatePin,
}