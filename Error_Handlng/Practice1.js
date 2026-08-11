async function error(){
    try {
        console.log(name);
    } catch(err) {
        console.log("The error is handled")
    }
}
error()

//Q:- Handle the error and print the error name and message.
async function name() {
    try {
        console.lg("I am sangram");
    } catch(err) {
        console.log(err.name);
        console.log(err.message);
    }
}
name()