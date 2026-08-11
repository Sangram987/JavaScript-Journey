let res = fetch('https://catfact.ninja/fact' , {
    headers: {
        authentication: "secret"
    }
}).then((res) => {
    return res.json();
}).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error.name)
})