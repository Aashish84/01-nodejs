const { resolve } = require("path");
const { readFile, writeFile } = require("fs");

//for counter file
var counter_file_path = resolve(__dirname, "content", "counter.txt");

var count_value = 0;
readFile(counter_file_path, "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  count_value = parseInt(result);
  writeFile(counter_file_path, `${count_value + 1}`, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count_value);
  });
});

// for read and write
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/async-demo.txt",
      `${count_value} ## file first : ${first} and second file : ${second}\n`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
