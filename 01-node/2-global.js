// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__filename);

//traditional
function print() {
  console.log("hellow world");
}
setInterval(print, 3000);

// ES6
setInterval(() => {
  console.log("hello worlds");
}, 1000);
