// Simple greeting using global variables
let greeting1 = "hi";
let name1 = " miki";

function greet1() {
  let message = greeting1 + name1;
  console.log(message);
}
greet1();

// Greeting using return
let greeting2 = "hi";
let name2 = " miki";

function greet2() {
  let message = greeting2 + name2;
  return message;
}
let res1 = greet2();
console.log(res1);

// Greeting with parameters
function greet3(a, b) {
  let message = a + b;
  return message;
}
let res2 = greet3(100, 333);
console.log(res2);

// Area of rectangle
function area(a, b) {
  return a * b;
}
console.log(area(20, 20));
console.log(area(30, 30));

// Maximum of two numbers
function maximum(a, b) {
  return Math.max(a, b);
}
console.log(maximum(22.1, 22));

// Check even or odd using function expression
let evenOrOdd1 = function (a) {
  if (a % 2 === 0) {
    console.log("It is an even");
  } else {
    console.log("It is an odd");
  }
};
evenOrOdd1(7);

// Check even or odd using arrow function and return
let evenOrOdd2 = (num) => {
  return num % 2 === 0 ? "It is an even" : "It is an odd";
};
console.log(evenOrOdd2(2));

// Average of three numbers using arrow function
let average = (a, b, c) => (a + b + c) / 3;
console.log(average(30, 20, 10));

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("App started");
})();

// Square of a number
let square = (n) => n * n;
console.log(square(20));
