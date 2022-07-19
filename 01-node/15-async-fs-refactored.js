const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const writeText = (path, first, second) => {
  return new Promise((resolve, reject) => {
    writeFile(path, `hello :- ${first} , ${second}`, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

//self invoke asunchronous function
(async function () {
  try {
    const first = await getText("./01-node/content/first.txt");
    const second = await getText("./01-node/content/second.txt");
    console.log(first, second);
    const write = await writeText(
      "./01-node/content/refactor-result.txt",
      first,
      second
    );
    console.log(write);
  } catch (error) {
    console.log(error);
  }
})();

//chaning
// getText("./01-node/content/second.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("we found error : " + err);
//   });

//traditional - bad as 11-fs-async.js

// readFile("./01-node/content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   //...
// });
