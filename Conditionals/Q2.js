let year = 2024;
let leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(leap);