const fs = require("fs");
const colors = require("colors");

const createFile = async (base, list, limit) => {
  try {
    let outputConsole = "";
    let outputFile = "";

    for (let i = 1; i <= limit; i++) {
      outputFile += `${base} x ${i} = ${base * i}\n`;
      outputConsole += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (list) {
      console.log("====================".green);
      console.log("   TABLE OF".green, colors.blue(base));
      console.log("====================".green);
      console.log(outputConsole);
    }

    fs.writeFileSync(`./files/tabla-${base}.txt`, outputFile);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
