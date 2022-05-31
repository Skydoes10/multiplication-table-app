const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    desc: "The base to be used in the table",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    desc: "Show the table",
  })
  .option("L", {
    alias: "limit",
    type: "number",
    default: 10,
    desc: "The limit of the table",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
