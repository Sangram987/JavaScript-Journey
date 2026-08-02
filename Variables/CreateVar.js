//Q1:- Create a variable name and store your full name. Print it.
let name = "Sangram Keshari Rout";
console.log(name);


//Q2:- Create variables a = 10 and b = 20. Print their sum.
let a = 10;
let b = 20;
let c = a+b;
console.log(c)


//Q3:- Swap two variables without using a third variable.
let x = 10;
let y = 5;
let swap = [x,y] = [y , x];
console.log(swap);


//Q4:- Create a constant PI with value 3.14159. Try to change it. What happens?
const PI = 3.14159;
console.log(PI);
PI = 3.14;
console.log(PI)  //Show TypeError

//Q5:- Declare var x = 5 inside a block and print it outside the block. Observe the output.
{
    var z = 5;
}
console.log(z);