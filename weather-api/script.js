const apiKey = "62b8fbc134b24ef591c74459251106";
let useCelsius = true;

async function getWeather(city) {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`);
        const data = await res.json();

        const current = data.current;
        const forecast = data.forecast.forecastday;

        document.getElementById("cityName").textContent = data.location.name;
        document.getElementById("weatherIcon").src = `https:${current.condition.icon}`;
        document.getElementById("condition").textContent = current.condition.text;
        document.getElementById("humidity").textContent = `${current.humidity}%`;
        document.getElementById("wind").textContent = `${current.wind_kph} km/h`;

        updateUnits(current.temp_c, current.temp_f, "temperature");
        updateUnits(current.feelslike_c, current.feelslike_f, "feelsLike");
        document.getElementById("minMax").textContent = `${forecast[0].day.mintemp_c}° / ${forecast[0].day.maxtemp_c}°`;

        setBackground(current.condition.text, current.is_day);
        renderForecast(forecast);
        renderHourly(forecast[0].hour);
    } catch (err) {
        alert("City not found.");
    }
}

function updateUnits(c, f, elId) {
    document.getElementById(elId).textContent = useCelsius ? `${c}°C` : `${f}°F`;
}

function setBackground(condition, isDay) {
    const body = document.body;
    body.className = '';
    condition = condition.toLowerCase();

    if (!isDay) {
        body.classList.add("night");
    } else if (condition.includes("sunny")) {
        body.classList.add("sunny");
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
        body.classList.add("rain");
    } else if (condition.includes("cloud")) {
        body.classList.add("cloudy");
    } else if (condition.includes("snow")) {
        body.classList.add("snow");
    } else {
        body.classList.add("sunny");
    }
}

function renderForecast(forecast) {
    const container = document.getElementById("forecastContainer");
    container.innerHTML = "";
    forecast.forEach(day => {
        const date = new Date(day.date);
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
        const tempHigh = useCelsius ? day.day.maxtemp_c : day.day.maxtemp_f;
        const tempLow = useCelsius ? day.day.mintemp_c : day.day.mintemp_f;

        container.innerHTML += `
          <div class="forecast-card">
            <h6>${dayName}</h6>
            <img class="forecast-icon" src="https:${day.day.condition.icon}" alt="Icon"/>
            <div>${tempHigh}° / ${tempLow}°</div>
            <small>${day.day.condition.text}</small>
          </div>`;
    });
}


function renderHourly(hourArray) {
    const container = document.getElementById("hourlyContainer");
    container.innerHTML = "";
    const now = new Date().getHours();

    for (let i = now; i < now + 12 && i < 24; i++) {
        const h = hourArray[i];
        const time = h.time.split(" ")[1];
        const temp = useCelsius ? h.temp_c : h.temp_f;

        container.innerHTML += `
          <div class="hourly-card">
            <div><strong>${time}</strong></div>
            <img src="https:${h.condition.icon}" width="50"/>
            <div>${temp}°</div>
            <small>${h.condition.text}</small>
          </div>`;
    }
}

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("searchInput").value.trim();
    if (city) getWeather(city);
});

document.getElementById("unitToggle").addEventListener("click", () => {
    useCelsius = !useCelsius;
    const city = document.getElementById("cityName").textContent;
    getWeather(city);
});

window.onload = () => getWeather("Mumbai");