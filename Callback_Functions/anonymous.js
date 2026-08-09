function greet(name , callback) {
    console.log("Hello " , name);
    callback();
}

//directly call.
greet("Sangram" , function() {
    console.log("Welcome to JavaScript.")
})