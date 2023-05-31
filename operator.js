/** @format */

//1. string concatenatioon
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literal 1+2 = ${1 + 2}`);

//2. Numberic opercmdator
console.log(1 + 2); // add
console.log(1 - 2); // subtract
console.log(1 * 2); // multiply
console.log(1 / 2); // divide
console.log(1 % 2); // remainder\
console.log(2 ** 3); // exponent

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
console.log(`perIncrement : ${preIncrement} counter : ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement} counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement} counter : ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement} counter : ${counter}`);

//4. Assignment operators
let x = 10;
let y = 20;

x += y;
x -= y;
x *= y;
x /= y;

//5. Comparision
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. ogical operators
const value1 = false;
const value2 = 4 < 2;
// || (or), find the first truthy value
console.log(`or ${value1 || value2 || check()}`);

// && (and), find the frist falsy value
console.log(`and ${value1 && value2 && check()}`);

//often used to compress long if-statements
//nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("??");
  }
  return true;
}

//7. Equality
const stringFive = "5";
const numberFive = 5;

//==loose equality, with type comversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type comversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const song1 = { name: "song" };
const song2 = { name: "song" };

const song3 = song1;
console.log(song1 == song2);
console.log(song1 === song2);
console.log(song1 === song3);
song3.name = "song2";
console.log(song1.name);

//equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); //true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

//8. Conditional operator : if
// if, eles if, else
const name = "song";
if (name == "ellie") {
  console.log("welcome, Ellie");
} else if (name == "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwon");
}

//9. Teranry operator : ?
// condition ? value1 : value2
console.log(name === "song" ? "yes" : "no");

//10. Switch Statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type check in TS

const browser = "Safari";
switch (browser) {
  case "IE":
    console.log("IE");
    break;
  case "Chrome":
  case "Firefox":
    console.log("Love you");
    break;
  case "Safari":
    console.log("Safari");
    break;
  default:
}

//loops
//while loop, while the condition is truthy
//body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while ${i}`);
  i--;
}

do {
  console.log(`do while ${i}`);
  i--;
} while (i > 0);
console.log(`done : ${i}`);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for ${i}`);
}
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`for ${i}, ${j}`);
  }
}

//01. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//02. iterate from 0 to 10 and print numbers until reching 8(use break)
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i > 8) break;
}
