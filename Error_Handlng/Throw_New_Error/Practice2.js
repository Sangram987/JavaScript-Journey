async function login(username , password) {
    try {
        if(!username) {
            throw new Error("Username must required! so please enter username.");
        }
        if(!password) {
            throw new Error("Password must required! Please enter password.");
        }
        console.log("Login Success")
    } catch(err) {
        console.log(err)
    } finally {
        console.log("Welcome to our webpage")
    }
}

login("SAngram" , 123)