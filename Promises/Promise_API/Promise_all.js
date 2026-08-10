let p1 = Promise.resolve("HTML");
let p2 = Promise.resolve("CSS");
let p3 = Promise.resolve("JavaScript");

Promise.all([
    p1, 
    p2,
    p3
]).then((value) => {
    console.log(value)
})


//Any one Promise if failed then.
let promise1 = Promise.resolve("HTML");
let promise2 = Promise.reject("CSS"); //it reject means all other results are ignored.
let promise3= Promise.resolve("JavaScript");

Promise.all([
    promise1,
    promise2,
    promise3
]).then((value) => {
    console.log(value)
}).catch((err) => {
    console.log("Error" , err)
})