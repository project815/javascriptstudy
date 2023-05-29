/** @format */
"use strict";

//Array

//1. Declaraion
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.clear();
//3. Looping over an array
//print all fruits

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//for of
for (let fruit of fruits) {
  console.log(fruit);
}

//foreach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));
