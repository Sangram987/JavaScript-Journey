//Q3:- Create a promise and Print the returned data.
async function print() {
    let promise = new Promise((resolve, reject) => {
        resolve("Hey! i am sangram, Whats your name...")
    }).then((value) => {
        console.log(value)
    })
}
print()