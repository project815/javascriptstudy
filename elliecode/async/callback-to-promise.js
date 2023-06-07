"use strict";

//Javascript is synchronous.
//Execute the code block in orger after hoising
//hoisting : var, function declration var변수나 함수선언이 자동적으로 제일 위로 올라감.
//호이스팅

//동기와 비동기, 비동기 처리하기!!!

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
// setTimeout(() => {}, timeout);
console.log(2);
console.log(3);
//자바스크립트는 보통 제일 위에서부터 아래로 실행되어진다.
//setTimeout은 브라우저에게 1초 뒤에 콜백을 실행하라고 요청함. 메세지 큐, 스택, 마이크로테스크???
//브라우저 api는 무조건 브라우저에게 먼저 보낸다.

//Syncronous callback
function printImmediately(print) {
  print();
}
//해당 함수의 선언이 hoisting호이스팅되어 가장 위로 올라감.

printImmediately(() => console.log("Synchrounous play"));
//Asyncronous callback

function printWithDelete(print, timeout) {
  setTimeout(print, timeout);
}
//해당 함수의 선언이 hoisting호이스팅되어 가장 위로 올라감.

printWithDelete(() => console.log("Asynchrounous play"), 2000);

//콜백함수란?, 활용, 동기 비동기
//언어들마다 콜백 지원 방식이 다름. 서브루틴, 람다표현식, 포인트,

//Callback hell example
class UserStorge {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("not found"));
        }
      });
    });
  }
}

const userStorage = new UserStorge();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`hello ${user.name}, you have a ${user.role} role `))
  .catch(console.log(error));
