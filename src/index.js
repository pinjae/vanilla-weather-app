// forecast

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
}

function getForecast(coordinates) {
  let apiKey = "1d34bfa5f4ff2d22f684fo0ete4b9039";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

// weather

function showWeather(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#degrees");
  let descriptionElement = document.querySelector("#description");
  let maxElement = document.querySelector("#high");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  maxElement.innerHTML = response.data.daily[0].temperature.maximum;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);

  getForecast(response.data.coordinates);
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

// default search

search("London");
