// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - path + file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

//setInterval - run after certain interval
//setTimeout - run only once after time

console.log(__dirname);

//traditional
function print() {
  console.log("hellow world");
}
setInterval(print, 3000);

// ES6
setInterval(() => {
  console.log("hello worlds");
}, 1000);
