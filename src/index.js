// search

function showWeather(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
  let apiKey = "1d34bfa5f4ff2d22f684fo0ete4b9039";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
