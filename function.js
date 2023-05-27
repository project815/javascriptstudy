/** @format */

//Function
// - fundamental building block in the programming
// - subprogram can be used to multiple times;
// - preforms a task or calculate a value;

//1. Function declaration
//function name(arg1, arg2, arg3) { body... return;}
//one function === one thing
// naming: doSomething, command verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS

function printHello() {
  console.log("Hello");
}

printHello();
function log(message) {
  console.log(message);
  return 0;
}

log("Hello");
log(1123);

//2. Parameters
// premitive parameters : passed by value
// object parmeters : passed by reference

function changeName(obj) {
  obj.name = "conder";
}

const song = { name: "song" };
changeName(song);
console.log(song.name);

//Default parameters(added by ES6)
function showMessage(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} from ${from}`);
}
//>>>change Function
function showMessage(message, from = "unknown") {
  console.log(`${message} from ${from}`);
}
showMessage("h1");

//4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }

  //자주 본 것 같음.
  args.forEach((arg) => console.log(arg));
}

printAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//5. local scrope
let globalMessage = "global";
function printMessage() {
  let message = "local";
  console.log(message);
  console.log(globalMessage);
}
printMessage();
// console.log(message); disabled because it is local scope

//6. Return a value
function sum(a, b) {
  return a + b;
}
const result = (a, b) => a + b;
console.log(`sum : ${sum(1, 2)}`);
console.log(`sum : ${result(1, 2)}`);

//7. Early return, Early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) return;
  //long upgrade logic
}

//First class function
//function are treated like any other variable
//can be used as a value to variable
//can be used as an argument to other functions
//can be returned by other function

//1. Function expression
//a function declaration can be used earlier than it is defined (hoisted)
//a function expression is created when the execution reaches it.
const printHello2 = function () {
  // anonymous function
  console.log("Hello");
};
printHello2();
const printAgain = printHello2;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 2));
