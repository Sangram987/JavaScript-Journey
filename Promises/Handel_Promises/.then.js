//Example
let promise = new Promise((resolve, reject) => {
    resolve("Hey i am sangram");
}).then((value) => {
    console.log(value)
})

//Another example.
let task = new Promise((resolve, reject) => {
    let a = 30;
    let b = 30;
    if (a === b) {
        resolve("Both number are same")
    }
    else {
        reject("The above condition is false")
    }
}).then((result) => {
    console.log(result)
});

