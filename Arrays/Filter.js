const arr = [
    23, 45, 65, 76, 90, 3, 5, 8, 9
];

let a = arr.filter((elem) => {
    return elem > 50
});
console.log(a);

let b = arr.filter((elem) => {
    return elem < 10
});
console.log(b)

let c = arr.filter((e) => {
    return e <= 5
});
console.log(c);


//filter the number divisible by 10.
let d = arr.filter((x) => {
    return x % 10 == 0
});
console.log(d)