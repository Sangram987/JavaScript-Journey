const arr = [
    23, 45, 67, 12, 11, 10, 21
];
//It return first number who grater then 20
let first = arr.find((n)=> {
   return n > 20
})
console.log(first)
