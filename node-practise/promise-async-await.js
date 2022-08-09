const { readFile } = require("fs");

console.log("start");

const myPromise = new Promise((resolve, reject) => {
  readFile("../01-node/content/first.txt", "utf-8", (err, result) => {
    if (err) {
      reject(err);
    }
    resolve(result);
  });
});

const start = async () => {
  console.log(await myPromise);
};
start();

console.log("end");
