const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const { assertArraysEqual } = require("./assertArrayEqual");
const assertEqual = require("./assertEqual");
const { assertObjectsEqual } = require("./assertObjectsEquals");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArray = require("./eqArrays");
const { eqObjects } = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPosition = require("./letterPositions");
const mapFunction = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArray,
  eqObjects,
  findKey,
  findKeyByValue,
  head,
  letterPosition,
  mapFunction,
  middle,
  tail,
  takeUntil,
  without,
};
