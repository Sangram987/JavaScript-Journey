//Q5:- Create a function that returns the fibonaciee of a number.
let num = 10;
let first_num = 0;
let second_num = 1;
let nextnum;
let i;

console.log("Fibonaciee series are: ");
for (i = 1; i < num; i++) {
    console.log(first_num);
    nextnum = first_num + second_num;
    first_num = second_num;
    second_num = nextnum;
};


console.log("Done")