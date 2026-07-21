let i;
for (i = 1; i <= 20; i++) {
  console.log(i);
}
for (j = 20; j >= 1; j--) {
  console.log(j);
}
sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
let d;
let n = 13;
for (d = 1; d <= 10; d++) {
  console.log(`${n} x ${d} = ${d * n}`);
}
sum = 0;
for (c = 1; c <= 50; c += 2) {
  sum += c;
}
console.log(sum);

for (let a = 2; a <= 100; a += 2) {
  console.log(a);
}
for (let b = 1; b <= 100; b += 2) {
  console.log(b);
}
let e = 34567;
let count = 0;
while (e>0){
  count++;
  e = Math.floor(e/10);
}
console.log(count);
let n = 1234;
let rev = 0;
while (n>0){
  let digit = n%10;
  rev = rev* 10 + digit ;
  n = Math.floor(n/10);
}
console.log(rev)
let n = 1221;
let orginal = n;
let rev = 0;
while (n>0){
  let digit = n%10;
  rev = rev * 10 + digit;
  n = Math.floor(n/10);
}
console.log(rev);
if(orginal === rev){
  console.log("The number is palindrome");
}else{
console.log("The number is not palindrome");
}
let n =12345;
let count = 0;
while (n>0){
  count++
n = Math.floor(n/10);
}
console.log(count)
let sum = 0;
for(i=1;i<=10;i++){
  sum = sum + i
}
console.log(sum);
let n = 234;
let sum = 0;
while (n>0){
  let digit = n%10
  sum = sum + digit
    n = Math.floor(n / 10);
}
console.log(sum);
let n =1269344;
let max = 0  ;
while(n>0){
  let digits = n%10;
  if(digits > max ){
    max = digits
  }
  n = Math.floor(n/10);
}
console.log(max);
let n = 1269344;
let min = 0;
while (n > 0) {
  let digits = n % 10;
  if (digits < min) {
    min = digits;
  }
  n = Math.floor(n / 10);
}
console.log(min);
let n = 43;
let fact = 1;
while(n>0){
  let digits = n%10;
  fact = fact *  digits
  n = Math.floor(n/10);
}
console.log(fact);
let n =135;
count = 0;
while(n>0){
    let digits = n % 10;
  if(digits%2==0){
    count++
  }
n = Math.floor(n/10);  
}
console.log(count)
let m = 34567;
count = 0;
while(m>0){
    let digit = m % 10;
  if(digit%2!=0){
   count++
  }
  m= Math.floor(m/10);
}

console.log(count);
