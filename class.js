/** @format */

"use strict";
//Object-oriendted programing
//class: template
//object: instance of a class
//JavaScript: instance of a class
//JavaScript class
//  - introduced in ES6
//  - systactical sugar over prototype-based inheritance

//1. calss declaration
class Person {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}
const song = new Person("song", 20);

console.log(song.name);
console.log(song.age);

//2. Getter and Setter
class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User("John", "Doe", -1);
console.log(user1.age);

//Fields(public, private)
//Too soon
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon
class Article {
  static publisher = "Dreeam Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//inheritance, polymorphism
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("triangle");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle1 = new Rectangle(10, 10, "red");
const triangle1 = new Triangle(10, 10, "blue");
rectangle1.draw();
triangle1.draw();
console.log(rectangle1.getArea());
console.log(triangle1.getArea());

//6. Class checking : instanceof
console.log(rectangle1 instanceof Rectangle);
console.log(triangle1 instanceof Rectangle);
console.log(triangle1 instanceof Triangle);
console.log(triangle1 instanceof Shape);
console.log(triangle1 instanceof Object);
