//Q5:- Create a function that returns the factorial of a number.
const factorial = () => {
    let fact = 1;
    let num = 5;
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log(fact)
}

factorial()