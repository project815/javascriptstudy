/** @format */
//1. Use strict
//added in ES5
//use this for valina JavaScript

"use strict";

//2.Variables (read and write)
//let (added in ES6)
let name = "song";
console.log(name);

name = "song2";
console.log(name);

let name2 = name;

console.log(name2);
name2 = "song3";
console.log(name2);
console.log(name);

//3. var (don't ever use this) - (read and write)
//var hositing (move declaration from bottom to top)
//has no black scope
// {
//   age = 4;
//   var age;
// }

// console.log(age);

//4. constant - (readOnly)
// use const whenever possible
// onlu use let if variable needs to change
// favor imutable data type always for a few reasons:
//  -security
//  -thread safety
//  -reduce human mistakes

const age = 4;
const maxNumber = 4;

//Note!!
//Immutable data type: primitive types, frozen objects(i.e object.freeze())
//Mutable data type: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes

//5. Variable types
//primitive, single item : number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

let a = 12;
let b = 1.2;

const count = 15;
const size = 15.1;
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

//number - string numeric values : infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string

const char = "c";
const brendan = "brendan";
const greeting = "hello!! " + brendan;
console.log(greeting);
const helloBob = `hi ${brendan}!`; // template literal(string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);
console.log(`value : ` + helloBob + ` type : ` + typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
//true: 1,2,3,4,5,6,7,8,9,10,11,12,1
const canRead = true;
const test = 3 < 1;
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

//null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value : ${x}, type : ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gsymbol = Symbol.for("id");
const gsymbo2 = Symbol.for("id");
console.log(gsymbol === gsymbo2);
console.log(`value : ${gsymbol.description}, type : ${typeof gsymbol}`);

//5.Dymanic typing : dynamaically typed values
let text = "hello";
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);

text = 1;
console.log(`value : ${text}, type : ${typeof text}`);

text = "6" + 5;
console.log(`value : ${text}, type : ${typeof text}`);

text = "6" - "5";
console.log(`value : ${text}, type : ${typeof text}`);
// console.log(text.charAt(0));

//6.object, real-life object, data object
const person = { name: "songminseok", age: 20 };
const person2 = { name: "songminseok", age: 20 };
