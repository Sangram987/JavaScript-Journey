let promisse1 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("First")
    }, 2000)
});

let promise2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Second")
    }, 3000)
});

let promise3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Third")
    }, 1000)
});

//
Promise.race(
    [
        promisse1,
        promise2,
        promise3
    ]
).then((value) => {
    console.log(value)
})