//Q4:- Create a function that checks whether a number is prime.
function isPrime(num) {    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false;


    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

let number = 29;

if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
