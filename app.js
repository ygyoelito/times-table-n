const {saveProduct} = require("./helpers/multiply");
const {argv} = require("./config/yargs");
const colors = require('colors');

console.clear();

saveProduct(argv.b, argv.l, argv.t)
  .then((fileName) => {
    console.log(colors.rainbow(fileName), colors.cyan("created"));
  })
  .catch((error) => {
    console.log(error);
  });