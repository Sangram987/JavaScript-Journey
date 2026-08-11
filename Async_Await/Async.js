//Example.
let a = async function greet() {
    return "Hello sangram";
}
a().then((message) => {
    console.log(message);
});

//Example.
async function sum(a=20 , b=30) {
    return a + b;
}
sum().then((value) => {
    console.log(value)
})