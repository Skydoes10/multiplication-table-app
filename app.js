const { createFile } = require("./helpers/multiplicate");
const argv = require("./config/yargs");
require("colors");

console.clear();

createFile(argv.b, argv.l, argv.L)
  .then((file) => console.log(`Created ${file.rainbow}`))
  .catch((e) => console.log(e));
