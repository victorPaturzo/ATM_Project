"use strict";
const {check} = require("./atm");
const {subtract} = require("./atm");
const {add} = require("./atm");
const {verify} = require("./atm");
const prompt = require("prompt-sync")();
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM(Boolean) {
  let pin = prompt("Please enter your pin.");
  verify(pin);
  if (pin === true) {
    return pin
  } else {alert("Invalid pin.  Please try again");
    accessATM()}
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}

//TODO: Call accessATM function

function mainMenu() {
  let mainMenuSelection = prompt("Hello valued customer!  Please select one of the following options:" + "\n" + 
  "1: Check current balance" + "\n" + "2: Make a deposit" + "\n" + "3: Make a withdrawal" 
  + "\n" + "4: Restart application" + "5: Quit");
  switch (mainMenuSelection) {
    case "1": check()
  }
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

//TODO: Call mainMenu function to start our app!
