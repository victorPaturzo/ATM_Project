"use strict";
const {check} = require("./atm");
const {subtract} = require("./atm");
const {add} = require("./atm");
const {verify} = require("./atm");
const prompt = require("prompt-sync")();
const {balance} = require("./account");
let updatedBalance = balance;
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM(pin) {
  let pinCheck = verify(parseInt(pin));
  if (pinCheck === true) {
    return true
  } else {console.log("Invalid pin.  Please try again");
    mainMenu()}
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}

//TODO: Call accessATM function

function mainMenu() {
  let mainMenuSelection = prompt("Hello valued customer!  Please select one of the following options:" + "\n" + 
  "1: Check current balance" + "\n" + "2: Make a deposit" + "\n" + "3: Make a withdrawal" 
  + "\n" + "4: Restart application" + "\n" + "5: Quit" + "\n");
  console.log(mainMenuSelection);
  switch (mainMenuSelection) {
    case "1": 
      let checkBalanceInput = prompt("Please enter your pin.")
      let boolean = accessATM(checkBalanceInput);
      check(boolean);
      mainMenu();
      break;
    case "2":
      let depositAmount = prompt("How much would you like to deposit into your account?");
      let depositInput = prompt("Please enter your pin.");
      add(depositAmount, accessATM(depositInput));
      mainMenu();
      break;
    case "3":
      let withdrawalAmount = prompt("How much would you like to withdraw from your account?");
      let withDrawalInput = prompt("Please enter your pin.");
      subtract(withdrawalAmount, accessATM(withDrawalInput));
      mainMenu();
      break;
    case "4":
      mainMenu();
      break;
    case "5":
      console.log("Thank you for your continued patronage!  See you next time!");
      break;
    default:
      console.log("Invalid entry, please try again.");
      mainMenu();
      break;
  }
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}
mainMenu();
//TODO: Call mainMenu function to start our app!
