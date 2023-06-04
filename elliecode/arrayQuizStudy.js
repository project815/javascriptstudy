// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits, toString());
  console.log(fruits.join(" | "));
}

// Q2. make an array out of a string

/**
 * Split a string into substrings using the specified separator and return them as an array.
 * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
 * @param limit A value used to limit the number of elements returned in the array.
 * 지정된 구분 기호를 사용하여 문자열을 하위 문자열로 분할하고 배열로 반환합니다.
 * @param separator  문자열을 구분하는 데 사용할 문자를 식별하는 문자열입니다. 생략하면 전체 문자열을 포함하는 단일 요소 배열이 반환됩니다.
 * @param limit 배열에서 반환되는 요소의 수를 제한하는 데 사용되는 값입니다.
 */
// split(separator: string | RegExp, limit?: number): string[];

{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(", ", 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();

  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 90),
];

// Q5. find a student with the score 90
/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found, find
 * immediately returns that element value. Otherwise, find returns undefined.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
// find<S extends T>(predicate: (value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
// find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
{
  const result1 = students.find(function (student, index) {
    console.log(student.name);
    console;
    return student.score === 90;
  });
  console.log(result1);

  const result2 = students.find((student) => student.score === 90);
  console.log(result2);

  // const result = students.find((student) => student.score === 90);
  // console.log(result);
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
 */
//  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
 */
//  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => {
    if (student.enrolled === true) {
      return student.score;
    } else {
      return "fdfsdf";
    }
  });
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
