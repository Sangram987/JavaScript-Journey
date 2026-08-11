function getData() {
    return Promise.resolve("raw user data");
}

function processData(data) {
    return Promise.resolve(data.toUpperCase());
}

async function run() {
    try {
        let data = await getData();
        let result = await processData(data);
        console.log(result); // Output: RAW USER DATA
    } catch (err) {
        console.error("An error occurred:", err.message);
    }
}
run()