var APIKey = "ad54bebac58cc390e5e8bdbe0c2225af";
var city = "Baltimore";



function getApi() {
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
    });
}

getApi();
  