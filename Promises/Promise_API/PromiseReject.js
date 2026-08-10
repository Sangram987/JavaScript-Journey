let promise = Promise.reject("Something went wrong!");

promise.then((value) => {
    console.log(value)
}).catch((err) => {
    console.log("Error: " + err)
})