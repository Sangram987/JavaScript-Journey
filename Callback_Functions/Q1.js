//Q1:- Create a function that accepts another function as an argument.

function greet(name , callback) {
    console.log("Hello " + name);
    callback();
}

function saybye() {
    console.log("Goodbye");
}

let accept = greet("Sangram" , saybye);
console.log(accept); 