let n = 5;
let pattern = "";

for (let i = 0; i < n; i++) {
    // Add leading spaces
    for (let j = 0; j < i; j++) {
        pattern += " ";
    }
    // Add stars
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);