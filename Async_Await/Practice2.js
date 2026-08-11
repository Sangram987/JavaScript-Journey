async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000)
    });

    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 5000)
    });


    console.log("Fetching delhi weather please wait...");
    let delhiW = await delhiWeather;
    console.log("Fetched delhi weather: " + delhiW);

    console.log("Feching banglore weather please wait...");
    let bangloreW = await bangloreWeather;
    console.log("Fetched delhi weather: " + bangloreW);
    return [
        delhiW,
        bangloreW
    ]
}

console.log("Welcome to weather control room..");
let a = weather()
a.then((value) => {
    console.log(value)
})

