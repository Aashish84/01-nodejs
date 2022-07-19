//over simplified of 15-async-fs-refactored.js

const { readFile, writeFile } = require("fs");

const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//self invoke asunchronous function
(async function () {
  try {
    const first = await readFilePromise("./01-node/content/first.txt", "utf-8");
    const second = await readFilePromise(
      "./01-node/content/second.txt",
      "utf-8"
    );
    console.log(first, second);
    await writeFilePromise(
      "./01-node/content/refactor-result-oversimplified.txt",
      `oversimplified : ${first} , ${second}`
    );
  } catch (error) {
    console.log(error);
  }
})();
