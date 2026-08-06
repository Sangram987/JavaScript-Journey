let arr = [
    34, 56, 76, 23, 12, 34
];

arr.forEach((element) => {
    if(element > 30) {
        console.log(element * element);
    }
    else {
        console.log(element + element)
    }
});
