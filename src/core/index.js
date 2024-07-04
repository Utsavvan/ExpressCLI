const { Command } = require("commander");
const fs = require("fs");
const path = require("path");

class ExpressCLI {
  constructor() {
    this.program = new Command();
    this.commands = [];
  }

  init() {
    this.program
      .version("0.1.0")
      .description("Custom CLI for Express.js Application");

    // Register user commands
    this.commands.forEach((command, index) => {
      command(this.program);
    });

    this.program.parse(process.argv);
  }

  addCommand(command) {
    if (typeof command === "function") {
      this.commands.push(command);
    } else {
      console.error("Invalid command: Commands must be functions.");
    }
  }
}

module.exports = ExpressCLI;
