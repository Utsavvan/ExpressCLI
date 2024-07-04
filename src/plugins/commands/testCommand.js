function testCommandFunction() {
  console.log("Test command executed successfully!");
}

function testCommand(program) {
  program
    .command("testCommand")
    .description("A test command to check CLI functionality")
    .action(testCommandFunction);
}

module.exports = testCommand;
