//Q3:- Find the largest of three numbers.
let a = 20;
let b = 30;
let c = 43;

if (a > b && a > c) {
    console.log(a, "is grater");
}
else if (b > a && b > c) {
    console.log(b, "ss grater");
}
else {
    console.log(c, "is grater")
}


//ShortMethod.
let d = 10,
    e = 25,
    f = 18;
let grater = Math.max(d, e, f)
console.log(grater);