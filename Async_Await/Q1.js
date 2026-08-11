//Q1:- Create a Promise that resolves with User fetched after 2 seconds.
async function FetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User Fatched..")
        }, 2000)
    })
}
FetchUser()