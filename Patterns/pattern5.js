let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
    // Add leading spaces
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }
    // Add odd number of stars (2*i - 1)
    for (let k = 0; k < 2 * i - 1; k++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);