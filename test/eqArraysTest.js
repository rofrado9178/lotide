const { assertEqual, eqArray } = require("../eqArrays");

assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArray([1, 2, 3], [1, 2, "4"]), true);
