console.log();
var x = 10;// hoisting will move top and javascript will assign it was like undefined

console.log(x);
let x = 10;//hoisted but in TDZ → ReferenceError

let a = 5;

{
  // console.log(a); // ReferenceError due to TDZ
  let a = 10;
  console.log(a); // 10
}