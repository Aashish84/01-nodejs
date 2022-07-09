// path module provide a way of working with directories and file path

const path = require("path");

//path seperator like in this path D:\node_js\01-node -> \ sign for window -> / for mac
console.log(path.sep);

const filepath = path.join(`${path.sep}content`, "subfolder", "test.txt");
console.log(filepath);
console.log(path.basename(filepath));

// relolve - Resolves the specified paths into an absolute path
// https://stackoverflow.com/questions/31317007/get-full-file-path-in-node-js

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
