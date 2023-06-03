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

//Addition, deletion, copy
//push : add  an item to the end
fruits.push("orange");
console.log(fruits);
//pop : remove an item from the end
fruits.pop();
console.log(fruits);
//unshift : add an item to the beginning
//shift : remove an item from the beginning
fruits.unshift("grape");
console.log(fruits);
fruits.shift();
console.log(fruits);

//note!!. shift, unshift are slower than pop,push

//splice: remove an item by index position
fruits.push("orange", "grape");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "지우고", "다른 거");
console.log(fruits);

const fruits2 = ["사과", "바나나"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
console.clear();
console.log(newFruits);
console.log(newFruits.indexOf("바나나"));
console.log(newFruits.indexOf("사과"));

//includes
console.log(newFruits.includes("apple"));
console.log(newFruits.includes("banana"));

//lastIndexOf

console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
