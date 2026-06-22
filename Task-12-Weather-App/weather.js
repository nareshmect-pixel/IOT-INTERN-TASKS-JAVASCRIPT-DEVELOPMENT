function getWeather()
{
    let city =
        document.getElementById("city").value.trim();

    let result =
        document.getElementById("result");

    if(city === "")
    {
        result.innerHTML =
        "Please enter a city name";
        return;
    }

    result.innerHTML =
    `
    <h3>${city}</h3>
    <p>Temperature: 30°C</p>
    <p>Condition: Sunny ☀️</p>
    <p>Humidity: 60%</p>
    `;
}