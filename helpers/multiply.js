const fs = require("fs");

const saveProduct = async (factor = 1, listar = false, tope = 10) => {
  try {
    if (typeof factor === "number") {
      i = 1;
      let terminal = "++++++++++ " + ("Table of " + factor).bgYellow.black + " ++++++++++\n";
      let output = "++++++++++ " + ("Table of " + factor) + " ++++++++++\n";
      while (i <= tope) {
        result = factor * i > 9 ? factor * i : "0" + factor * i;
        output += `${factor} x ${i} = ${result}`;
        terminal += `${factor} ${"x".green} ${i} ${"=".green} ${result}`;
        i !== tope ? (output += "\n") : output;
        i !== tope ? (terminal += "\n") : terminal;
        i++;
      }
      output += "\n+++++++++++++++++++++++++++++++++";
      terminal += "\n+++++++++++++++++++++++++++++++++";

      const file_name = "table-" + factor + ".txt";
      if (listar) {
        console.log(terminal);
      } else {
        output = "";
      }
      fs.writeFileSync("./table-txt/" + file_name, output);
      return file_name;
    } else {
      throw String(factor).toUpperCase() + " is not a number";
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  saveProduct,
};
