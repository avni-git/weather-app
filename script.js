async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d61acb30fb65b1d6c33bcca8b7bf60db";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // debug

        if (data.cod == 401) {
            alert("❌ Invalid API Key!");
            return;
        }

        if (data.cod == "404") {
            alert("❌ City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
        document.getElementById("desc").innerText = "Weather: " + data.weather[0].description;
        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";

    } catch (error) {
        alert("Something went wrong!");
    }
}