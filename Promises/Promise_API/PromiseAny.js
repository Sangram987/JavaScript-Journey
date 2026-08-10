let promise1 = new Promise((resolve , reject) => {
    reject("Error");
})

let promise2 = new Promise((resolve , reject) => {
    setTimeout(() => {
       resolve("Success")
    }, 1000)
})

let promise3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        reject("Success2")
    }, 2000)
})

Promise.any(
    [
        promise1,
        promise2,
        promise3
    ]
).then((value) => {
    console.log(value)
})