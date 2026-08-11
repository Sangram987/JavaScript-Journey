fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        title: "My first post",
        body: "LEarning fetch API",
        userId: 1
    })
})
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP erro r! Status: ${response.status}`);
    }
    return response.json();
})
.then((value) => {
    console.log(value); // Returns created post object with an ID
})
.catch((err) => {
    console.log("Error:", err.message);
});