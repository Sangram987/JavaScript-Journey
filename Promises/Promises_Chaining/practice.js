//Example.
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 seconds");
        resolve(56);
    }, 2000)
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2")
        }, 2000);
    })
    return p2;
}).then((value) => {
    console.log(value)
    console.log("We are done.");
    return 2;
}).then((value) => {
    console.log(value)
    console.log("We are pakka done.");
}).catch((error) => {
    console.log("Error" + error)
})


//Another example.
let promise = new Promise((resolve , reject) => {
    resolve("A")
}).then((value) => {
    console.log(value);
    return "B"; 
}).then((value) => {
    console.log(value);
    return "C";
}).then((value) => {
    console.log(value);
})