let p1 = new Promise((resolve , reject) => {
   resolve("Java")
});

let p2 = new Promise((resolve , reject) => {
    reject("python")
})

let p3 = new Promise((resolve , reject) => {
    resolve("JavaScript")
})
Promise.allSettled(
    [
        p1,
        p2,
        p3
    ]
).then((value) => {
    console.log(value)
})