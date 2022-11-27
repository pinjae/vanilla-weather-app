// weather

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperatureElement = document.querySelector("#current-temp");
  let h2 = document.querySelector("h2");

  celsiusTemperature = response.data.temperature.current;

  h1.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

// date

let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
  hours = "0" + hours;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

h2.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}`;

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
