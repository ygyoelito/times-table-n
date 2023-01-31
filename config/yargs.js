const argv = require("yargs")
  .option({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      description: 'The number N',
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      description: 'Display the multiplication table in console',
    },
    t: {
        alias: "tope",
        type: "number",       
        description: 'Limit of numbers to be multiplied by N',
        default: 10,
      },
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.t)){
      throw "A number should be entered";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
