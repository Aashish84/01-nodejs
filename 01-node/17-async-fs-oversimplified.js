//even more over simplified of 15-async-fs-refactored.js

const { readFile, writeFile } = require("fs").promises;

//self invoke asunchronous function
(async function () {
  try {
    const first = await readFile("./01-node/content/first.txt", "utf-8");
    const second = await readFile("./01-node/content/second.txt", "utf-8");
    console.log(first, second);
    await writeFile(
      "./01-node/content/refactor-result-oversimplified.txt",
      `even more oversimplified : ${first} , ${second}`
    );
  } catch (error) {
    console.log(error);
  }
})();
