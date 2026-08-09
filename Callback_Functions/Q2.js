//Q3:- Create a calculator function that accepts an operation function.
function calculator(x, y, operator) {
    return operator(x, y)
}
console.log(calculator(5, 3, (x, y) =>
    x + y
));