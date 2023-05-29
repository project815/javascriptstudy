/** @format */

//Objects
//one of the JavaScript data types
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of objects.
//Object = {key : value};

//1.Literals and properties
const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

const name = "John";
const age = 25;

print(name, age);

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "Ellie", age: 30 };
print(ellie);

//동적으로 코드 중간에 생성 삭제가 가능함.. ㅎㄷㄷ.
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
//key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
  console.log(obj.key);
}

//동적으로 키에 대한 value를 가져올 때 유용하게 사용될 수 있음.
printValue(ellie, "name");
printValue(ellie, "age");

//3. Property value shorthand
const person1 = { name: "bob", age: 25 };
const person2 = { name: "bob", age: 23 };
const person3 = { name: "bob", age: 21 };
const person4 = new Person("bob", 25);

//4. Constructor function
//클래스로 인스턴스 생성처럼 함수에서는 constructor function을 통해 생성함.
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

//5. in operator : property exsitence check(key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("hasJob" in ellie);

//6. for...in vs for...of
//for(key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}
//for(value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3, obj]);
const user = { name: "ellie", age: "20" };
const user2 = user;

user2.name = "bob";
console.log(user.name);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);

user4.name = "John";

console.log(user.name);
console.log(user4.name);
