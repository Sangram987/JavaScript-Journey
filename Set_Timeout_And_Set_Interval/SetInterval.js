//Create SetInterval.
let interval = setInterval(() => {
    console.log("Hye! hii Whats up")
}, 2000);

//Cleat imterval.
clearInterval(interval);


//Write a program when count = 5 then stop interval.
let count = 0;
let a = setInterval(() => {
    count++;
    console.log(count);
    if(count === 5) {
        clearInterval(a);
    }

}, 1000);