//Execute the same function synchronous according to me which function run first.
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 Completed.");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 Completed");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 Completed");
        callback();
    }, 1000)
}


//Execute according to me which task run first.
task3(() => {
    task1(() => {
        task2(() => {
            console.log("All Tasks Are Completed.")
        })
    })
})