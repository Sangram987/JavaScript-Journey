//Example.
let promise = new Promise((resolve , reject) => {
    resolve("Hello");
})
promise.then((value) => {
    console.log("Handler1 " + value);
})
promise.then((value) => {
    console.log("Handler2 " + value);
})
promise.then((value) => {
    console.log("Handler3 " + value)
});


//Another example.
promise.then(() => {
    console.log("A")
});
promise.then(() => {
    console.log("B")
});
promise.then(() => {
    console.log("C")
})