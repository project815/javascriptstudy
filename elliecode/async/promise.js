"use strict";

//promise is a javascript object for asynchronous operation.
//State : pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//when new Promise is created, the exexuter runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files)
  console.log("doing someing");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no Network"));
  }, 2000);
});

//2. Consumers : then, catch, finally
promise
  .then((value) => {
    //성공resolve
    console.log(value);
  })
  .catch((err) => {
    //실패reject
    console.log(err);
  })
  .finally(() => {
    // 성공여부에 상관없이 실행
    console.log("finally");
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value * 3;
  })
  .then((value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value - 1), 1000);
    });
  })
  .then((value) => {
    console.log(value);
  });

//4. Error Handing
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(`${hen} => 계란`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 요리`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal))
//   .catch(consol.log);

getHen()
  .then(getEgg)
  .catch((err) => {
    return "빵";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
