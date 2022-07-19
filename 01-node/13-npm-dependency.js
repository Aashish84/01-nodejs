// local dependency
//npm i <packageName>

// global dependency
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

// to setup clone
//npm install

//npm uninstall <packagename>
const _ = require("lodash");

const items = [1, [2, [3, [4, [5, [6]]]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
