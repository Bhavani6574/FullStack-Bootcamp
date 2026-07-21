let i;
let j;
let row;
let n = 9;
console.log(n / 2);
let mid = Math.floor(n / 2);

for (i = 1; i <= n; i++) {
  row = " ";
  for (j = 1; j <= n; j++) {
    if (i == j || i + j == n + 1) {
      row = row + "*";
    } else {
      row = row + " ";
    }
  }
  console.log(row);
}
