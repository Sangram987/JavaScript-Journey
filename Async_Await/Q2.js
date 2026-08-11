//Q2:- Create an async function to await the Promise.
async function wait() {
    let promise = new Promise((resolve , reject) => {
        resolve("I am sangram.")
    });
    let a = await promise;
    console.log(a)
}
wait()

