const card = document.getElementById("boxes");
const searchButton = document.getElementById("search-button");
const inputField = document.getElementById("input");
const apiKey = "d5eae1a62bdba2cb31913ba8cb246a4e";

searchButton.addEventListener("click", async () => {
    const city = inputField.value.trim();
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    } else {
        alert("Please enter a city name.");
    }
});

async function getWeatherData(city) {
    const url = `${baseURL}?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

function displayWeatherData(data) {
    const { name, main, weather, wind } = data;
    
    card.innerHTML = `
        <div class="box">
            <p class="city-name">${name} <img src="assets/icons/location-icon.png" alt="Location" id="location-icon"></p>
            <div class="heat-box">
                <img src="assets/icons/temperature_icon.png" alt="temperature" id="temperature">
                <h3><span class="heat">${Math.round(main.temp)}</span>°C</h3>
                <img src="assets/weather-icons/${getWeatherIcon(weather[0].icon)}" alt="heat" id="weather-icon">
            </div>
            <div class="date">
                <p id="day-date"></p>
            </div>
            <div id="temp-info">
                <div class="infos">
                    <p>HUMIDITY</p>
                    <p id="humidity">${main.humidity}%</p>
                </div>
                <div class="infos">
                    <p>HIGH / LOW</p>
                    <p><span id="top-heat">${Math.round(main.temp_max)}</span>°/ <span id="lowest-heat">${Math.round(main.temp_min)}</span>°</p>
                </div>
                <div class="infos">
                    <p>WIND DIRECTION</p>
                    <p id="wind-direction">${getWindDirection(wind.deg)}</p>
                </div>
                <div class="infos">
                    <p>Wind Speed</p>
                    <p><span id="wind-speed">${Math.round(wind.speed)}</span>Km/h</p>
                </div>
            </div>
        </div>
        <button class="previuos">&#10094</button>
        <button class="next">&#10095</button>

    `;
}

function getWeatherIcon(iconId) {
    return `${iconId}.svg`; 
}

function getWindDirection(degrees) {
    const directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
}
