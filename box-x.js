let i;
let j;
let row;
let n = 9;
let mid = Math.floor(n / 2);

for (i = 0; i <= n; i++) {
  row = "";
  for (j = 0; j <= n; j++) {
    if (j == mid || i == mid) {
      row = row + "*";
    } else {
      row = row + " ";
    }
  }
  console.log(row);
}
