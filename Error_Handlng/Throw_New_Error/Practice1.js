async function age() {
    try {
        let age = 188;
        if(age > 180) {
            throw new Error("This is probably not tru")
        }
    } catch(err) {
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
    }
}
age()