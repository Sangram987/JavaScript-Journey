const arr = [
    1, 2, 3, 4, 2, 5, 7
];
let newarr = arr.reduce((h1 , h2) => {
    return h1 + h2
});
console.log(newarr);



const arr2 = [
    21, 4, 5, 6, 2, 34, 65
];
const reduce_func = ((elem1 , elem2) => {
    return elem1 * elem2
});
let new2 = arr.reduce(reduce_func);
console.log(new2)