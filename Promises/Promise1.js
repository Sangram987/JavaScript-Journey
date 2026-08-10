let promise = new Promise((resolve , reject) => {
    let success = true;
    if(success) {
        resolve("Task Complited successfully.");
    }
    else {
        reject("The Task Failed.")
    }
});
console.log(promise)