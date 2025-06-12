const topCountries = [
    "USA", "India", "Brazil", "Russia", "France",
    "UK", "Germany", "Italy", "Turkey", "Japan"
];

const dashboard = document.getElementById("dashboard");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

// Load Global Stats
async function loadGlobalStats() {
    const res = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await res.json();

    document.getElementById("globalStats").innerHTML = `
    <div class="card">
      <h3>🌐 Total Cases</h3>
      <div class="cases">${data.cases.toLocaleString()}</div>
    </div>
    <div class="card">
      <h3>💀 Total Deaths</h3>
      <div class="deaths">${data.deaths.toLocaleString()}</div>
    </div>
    <div class="card">
      <h3>💚 Recovered</h3>
      <div class="recovered">${data.recovered.toLocaleString()}</div>
    </div>
    <div class="card">
      <h3>📈 Today Cases</h3>
      <div class="today">${data.todayCases.toLocaleString()}</div>
    </div>
  `;
}

// Load Top 10 Countries
async function loadTopCountries() {
    dashboard.innerHTML = ""; // clear before loading
    for (let country of topCountries) {
        try {
            const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
            const data = await res.json();

            dashboard.innerHTML += `
        <div class="card">
          <h3>${data.country} <img src="${data.countryInfo.flag}" width="25" /></h3>
          <div class="cases">Cases: ${data.cases.toLocaleString()}</div>
          <div class="deaths">Deaths: ${data.deaths.toLocaleString()}</div>
          <div class="recovered">Recovered: ${data.recovered.toLocaleString()}</div>
          <div class="today">Today: ${data.todayCases.toLocaleString()}</div>
        </div>
      `;
        } catch (err) {
            console.error(`Error loading data for ${country}`, err);
        }
    }
}

// Search Country
searchInput.addEventListener("input", async () => {
    const country = searchInput.value.trim();
    if (country.length < 2) {
        searchResult.innerHTML = "";
        return;
    }

    try {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
        if (!res.ok) throw new Error("Not found");

        const data = await res.json();
        searchResult.innerHTML = `
      <div class="dashboard">
        <div class="card">
          <h3>${data.country} <img src="${data.countryInfo.flag}" width="25" /></h3>
          <div class="cases">Cases: ${data.cases.toLocaleString()}</div>
          <div class="deaths">Deaths: ${data.deaths.toLocaleString()}</div>
          <div class="recovered">Recovered: ${data.recovered.toLocaleString()}</div>
          <div class="today">Today: ${data.todayCases.toLocaleString()}</div>
        </div>
      </div>
    `;
    } catch {
        searchResult.innerHTML = `<p style="color:white;">No data found for "${country}"</p>`;
    }
});

// Initialize
loadGlobalStats();
loadTopCountries();
