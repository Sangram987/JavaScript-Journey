let n = 5;
let pattern = "";
for(i=5 ; i>=1 ; i--) {
    for(j=1 ; j<=i ; j++) {
        pattern += "*";
    }
     pattern += "\n";
}

console.log(pattern)