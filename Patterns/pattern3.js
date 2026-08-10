let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
  // Add spaces
  for (let j = 0; j < n - i; j++) {
    pattern += " ";
  }
  // Add stars
  for (let k = 0; k < i; k++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);