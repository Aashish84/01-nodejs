// OS is built in module
// provides information of computer operating system

const os = require("os");
console.log(os.userInfo());

// above line no 1 by destructuring

const { uptime } = require("os");

console.log(`the system uptime is ${uptime}`);

const myObj = {
  platform: os.platform(),
  type: os.type(),
  architecture: os.arch(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(myObj);
