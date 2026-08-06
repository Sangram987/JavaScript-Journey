//Q2:- Add a number at the end.
let arr = [
    5, 8, 9, 23, 45, 67
];
arr.push(90)

console.log(arr);

//Q3:- Remove the first element.
let remove = arr.shift();
console.log(remove);


//Q4:- Find the largest number in the array.
let maxnum = Math.max(...arr)
console.log(maxnum);


//Q5:- Use map() to create a new array with doubled values.
let double = arr.map(value => value * 2);
console.log(double)

