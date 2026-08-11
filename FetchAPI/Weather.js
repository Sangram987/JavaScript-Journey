//Fetch weather API data
fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=20.2961&longitude=85.8245&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
).then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
}); 