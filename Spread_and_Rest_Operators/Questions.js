//Q1:- Copy an array using the spread operator.
const a = [1, 2, 3];
const b = [4, 5, 6];
const copy = [...a];


//Q2:- Merge two arrays.
const merged = [...a, ...b];
console.log(merged);


//Q3:- Merge two objects.
const obj1 = {
    name: "Sangram"
};
const obj2 = {
    age: 21
};
console.log({ ...obj1, ...obj2 });


//Q4:- Create a function that accepts unlimited arguments using the rest operator.
function total(...nums) {
    return nums.reduce((s, n) =>
        s + n, 0
    );
}
console.log(total(1, 2, 3, 4));


//Q5:- Find the maximum number using spread and Math.max().
console.log(Math.max(...merged));