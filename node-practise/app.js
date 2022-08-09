const x = require("./node-p");

console.log(x());

console.log(__dirname);
console.log(__filename);

y();
function y() {
  console.log("hello");
}
