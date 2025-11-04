                             

console.log("----- CONDITIONAL STATEMENTS -----");

let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: Fail");
}

let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid Day");
}

// -------------------------
// 2. LOOPS
// -------------------------

console.log("----- LOOPS IN JAVASCRIPT -----");

// For Loop Example
for (let i = 1; i <= 5; i++) {
  console.log("For Loop -> Count:", i);
}

// While Loop Example
let num = 1;
while (num <= 3) {
  console.log("While Loop -> Number:", num);
  num++;
}

// Do-While Loop Example
let n = 5;
do {
  console.log("Do-While Loop runs at least once! n =", n);
  n++;
} while (n <= 4);

// -------------------------
// 3. FUNCTIONS
// -------------------------

console.log("----- FUNCTIONS -----");

// Basic Function
function greet() {
  console.log("Hello, Bhavani! Keep Coding!");
}
greet();

// Function with Parameters
function introduce(name, goal) {
  console.log("Hi, I'm " + name + " and my goal is " + goal);
}
introduce("Bhavani M", "to become a Full Stack + AI Developer");

// Function with Return Value
function add(a, b) {
  return a + b;
}
let result = add(10, 25);
console.log("Sum =", result);

// Function returning your name
function myName() {
  return "BHAVANI M";
}
console.log("My Name:", myName());



