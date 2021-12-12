var APIKey = "ad54bebac58cc390e5e8bdbe0c2225af";

var cityFormEl = document.querySelector('#city-form');
var cityInputEl = document.querySelector('#user-city');
var pic = document.querySelector('#pic');
var weatherIcon = document.createElement('img');


var formSubmitHandler = function(event) {
  event.preventDefault();
  var city = cityInputEl.value.trim();
  getApi(city);
  $('h1#currentWeather').html("Current weather in " + city); 
}



var getApi = function(city) {
  var requestUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $('#temp').html("Temp: " + data.main.temp +"&#8457");
      $('#wind').html("Wind: " + data.wind.speed + " MPH");
      $('#hum').html("Humidity: " + data.main.humidity + "%");
      var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      
      weatherIcon.setAttribute('src', iconUrl);
      weatherIcon.setAttribute('class', 'weather-img');
      pic.append(weatherIcon);
    });




}

cityFormEl.addEventListener('submit', formSubmitHandler);


/* $('h1#currentWeather').html("Current weather in " + cityInputEl.value); */


