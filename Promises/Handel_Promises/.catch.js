let promise = new Promise((resolve , reject) => {
    reject("Something went wrong.");
}).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})