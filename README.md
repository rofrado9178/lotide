# Lotide

A mini clone of the [lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**
`npm install @rofrado9178/lotide`

**Require it:**
`const _ = require("@rofrado9178/lotide");`

**Call it:**
`const results = _.tail([1,2,3]) //=> [2,3]`

## Documentation

The following functions are currently implemented:

- ` assertArraysEqual(arrayResult,expectedArrayResult)`: function that will test a comparison between two arrays and give return true or false

- `assertEqual(result , expected)`: function that will test two values the result and expected value and will return boolean

- `assertObjectsEqual(result, expected)`: function that will test if two object is identical or not, with the same key object and values

- `countLetters("string")`: function that will turn given string into key object for every of each letter and count it

- `countOnly(array, object)`: function that will return an object containing counts of everything that the input object listed

- `eqArray(array1 , array2)`: function that will compare two of array and return true or false base on perfect match

- `eqObject(object1 , object2)`: function that will compare if two object is identical or not base on key and value

- `findKey(object, callback)`: function that takes in object and callback as a parameter,it will scan and return the first key that callback return true

- `findKeyByValue(object, value)`: function that takes two parameters object and value, and will return the key if match value found

- `head(array)`: function that will run through an array and will return only the head of an array (first element in the array)

- `letterPositions(words)`: function that will return an object of each letters as a key and an index position as a value for each letters

- `mapFunction(array, callback)`: function will return a new array based on the results of the callback function

- `middle(array)`: function that takes an array as a parameter and will return an array with out the first and the last element from given array

- `tail(array)`: function that takes an array an array as a parameter and will return an array with only the last index of given array

- `takeUntil(array , callback)`: function that takes two parameters an array and callback, the function will return a slice of the array with elements taken from the begining, it should keep going until the callback / predicate returns a truthy value.

- `without(array, itemToRemove)`: function that should takes in an array and itemToRemove array, it should return a new array with only those element from source that are not present in the itemsToRemove array.
