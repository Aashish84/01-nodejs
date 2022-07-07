const names = require("./4-names");
const sayHi = require("./5-utils");
const altexpo = require("./6-alternative-exports");

// 7-mind-granade
require("./7-mind-granade"); //because the function is called in module

altexpo.hw();
console.log(altexpo);

sayHi("asish");
sayHi(names.ram);

console.log("===");

Object.keys(names).forEach((element) => {
  sayHi(element);
});
