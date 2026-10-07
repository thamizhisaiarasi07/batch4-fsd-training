async function getWeather() {

    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if (city == "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    try {

        let locationResponse = await fetch(
            "https://geocoding-api.open-meteo.com/v1/search?name=" 
            + city + "&count=1"
        );

        let locationData = await locationResponse.json();

        if (!locationData.results) {
            result.innerHTML = "City not found";
            return;
        }

        let latitude = locationData.results[0].latitude;
        let longitude = locationData.results[0].longitude;
        let cityName = locationData.results[0].name;

        let weatherResponse = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude="
            + latitude
            + "&longitude="
            + longitude
            + "&current=temperature_2m"
        );

        let weatherData = await weatherResponse.json();

        let temperature = weatherData.current.temperature_2m;

        result.innerHTML =
            "<h2>" + cityName + "</h2>" +
            "<p>Temperature: " + temperature + " °C</p>";

    } catch (error) {

        result.innerHTML = "Unable to get weather data";

    }
}