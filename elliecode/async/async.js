//async & await
//clear style of using promise :)

//1. async
function fetchUser() {
  //do network request in 10 secs...

  //   return new Promise((resolve, reject) => {
  //     resolve(user);
  //   });
  setTimeout(() => {
    return "ellie";
  }, 2000);
}

const user = fetchUser();
console.log(user); //비동기적으로 처리해야 함.

//pending
function fetchPending() {
  return new Promise((resolve, reject) => {
    return "ellie";
  });
}

const numberr = fetchPending();
console.log(numberr); ////

//resolve
function fetchResolve() {
  return new Promise((resolve, reject) => {
    resolve("songminseok");
  });
}

fetchResolve().then((value) => console.log);

//async
async function fetchAsync() {
  return "songminseok";
}
const user2 = fetchAsync();
user2.then((value) => {
  console.log(value);
});

//2.await
function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  //   throw "error"; //에러 발생 가정!!
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}
//ㅅ아래 코드를 위처럼 간단히 쓸 수 있음.
function getBanana2() {
  return delay(3000).then(() => "banana");
}

//콜백지옥과 비슷한 문제점 발생
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then((value) => console.log(value));

//
async function pickFruits2() {
  //   const apple = await getApple(); //1초 소요
  //   const banana = await getBanana(); //1초 소요 위에 기다렸다가 진행됨.

  const applePromise = getApple();
  const bananaPromise = getBanana(); //만들자마자 코드가 병렬적으로 실행된다. 근데 병렬적으로 하는 걸 이렇게 더럽게 안 짠다.!!!

  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana} 나도 줘`;
}
pickFruits2().then((value) => console.log(value));

//useful, Promise Apis
function pickAllFruit3() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruit3().then(console.log);

//race
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

//hello world
console.log("hello world");

//3초 뒤에  hello 출력
