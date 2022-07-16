// git branching
const { resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");

const counter_file_path = resolve(__dirname, "content", "counter.txt");
const count_value = readFileSync(counter_file_path, "utf-8");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second, first);

writeFileSync(
  "./content/wited-demo.txt",
  `${count_value} ## file first : ${first} and second file : ${second}\n`,
  { flag: "a" }
);

const new_count_value = parseInt(count_value) + 1;
writeFileSync(counter_file_path, `${new_count_value}`);
