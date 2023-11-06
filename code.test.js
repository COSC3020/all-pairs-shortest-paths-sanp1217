const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync("code.js") + "");

const graph = [
  [0, 5, Infinity, 10],
  [Infinity, 0, 3, Infinity],
  [Infinity, Infinity, 0, 1],
  [Infinity, Infinity, Infinity, 0],
];
const expectedOutput = [
  [0, 5, 8, 9],
  [Infinity, 0, 3, 4],
  [Infinity, Infinity, 0, 1],
  [Infinity, Infinity, Infinity, 0],
];

assert.deepStrictEqual(allPairsShortestPaths(graph), expectedOutput);

const graph1 = [
  [0, 3, Infinity, 5],
  [2, 0, Infinity, 4],
  [Infinity, 1, 0, Infinity],
  [Infinity, Infinity, 2, 0],
];

const expectedOutput1 = [
  [0, 3, 7, 5],
  [2, 0, 6, 4],
  [3, 1, 0, 5],
  [5, 3, 2, 0],
];

assert.deepStrictEqual(expectedOutput1, allPairsShortestPaths(graph1));
