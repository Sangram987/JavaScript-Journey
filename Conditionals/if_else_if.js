//suppose age = 34

let age = 34;

if (age < 0) {
    console.log("This is a invalid age !Please enter valid age");
}
else if (age < 9) {
    console.log("You are child and you cannot think of driving");
}
else if (age >= 9 && age < 18) {
    console.log("You are chils and you can thin of drive, but not now after 18 ");
}
else {
    console.log("You can now drive because you are grater then 18");
}
console.log("Done");