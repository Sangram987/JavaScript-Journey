//Suppose we have three asynchronous task.
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

//Execute the functions one by one means asynchronous.
task1(() => {
    task2(() => {
        task3(() => {
            console.log("All Tasks Completed")
        });
    });
});

//Execute the same function synchronous according to me which function run first.
task1(() => {
    task3(() => {
        task2(() => {
            console.log("All Tasks Are Completed.")
        })
    })
})