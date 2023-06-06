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
    // resolve("ellie");
    reject(new Error("no Network"));
  }, 2000);
});

//2. Consumers : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
