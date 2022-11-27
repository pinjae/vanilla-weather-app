//weather

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperatureElement = document.querySelector("#current-temp");

  celsiusTemperature = response.data.temperature.current;

  h1.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

// search

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
  let apiKey = "1d34bfa5f4ff2d22f684fo0ete4b9039";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

// form

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
