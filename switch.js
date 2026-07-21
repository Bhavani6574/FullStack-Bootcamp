
//DAY
let days = 0;

switch (days) {
  case 1:
    console.log("Happy monday");
    break;
  case 2:
  case 3:
  case 4:
    console.log("Happy midweeks");
    break;
  case 5:
    console.log("Thanks God! Its Friday!!");
    break;
  case 6:
  case 0:
    console.log("Happy weekend");
    break;
  default:
    console.log("Happy monday");
}

// let age = 16;
// let message;
// console.log(age);
// console.log(message);
// console.log(typeof message);
// console.log(typeof age);

// message = "hello";
// console.log(message);
// console.log(typeof message);


//Checking result using switch
let Grade = "D";
switch (Grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Needs to improvement");
    break;
  case "F":
    console.log("Failed");
    break;

  default:
    console.log("Invaild grade");
}


//MONTH
let mounth = 9;

switch (mounth) {
  case 12:
  case 1:
  case 2:
    console.log("Happy Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Happy Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Happy Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Happy Autumn");
    break;
  default:
    console.log("Invaild month");
}


//ARTHEMETIC OPERATOR
let op = "/";
switch (op) {
  case "+":
    console.log("Addition");
    break;
  case "-":
    console.log("Subtraction");
    break;
  case "*":
    console.log("Multiplication");
    break;
  case "/":
    console.log("Division");
    break;
  default:
    console.log("Invaild Operator");
}

//OPERATOR
let opp = "/";
switch (opp) {
  case "+":
    console.log(2 + 2);
    break;
  case "-":
    console.log(2 - 1);
    break;
  case "*":
    console.log(6 * 2);
    break;
  case "/":
    console.log(22 / 2);
    break;
  default:
    console.log("Invaild Operator");
}
