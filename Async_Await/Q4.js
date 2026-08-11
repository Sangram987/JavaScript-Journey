//Q4:- Handle errors using try...catch.
async function error() {
    try {
        console.log(name)
    } catch(err) {
        console.log(err.name);
        console.log(err.message)
    }
}
error()