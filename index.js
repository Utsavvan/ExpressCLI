const ExpressCLI = require("./src/core");
const { testCommand } = require("./src/plugins");

const newExpressCLI = new ExpressCLI();

newExpressCLI.addCommand(testCommand);

module.exports = newExpressCLI;
