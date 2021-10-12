var tempEl;

$("#temp").html("Hello");

function getApi() {
    var requestUrl ='https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=hourly,daily&appid=ad54bebac58cc390e5e8bdbe0c2225af';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        $('#temp').html("Temp: " + data.current.temp +"&#8457");
        $('#wind').html("Wind: " + data.current.wind_speed + " MPH");
        $('#hum').html("Humidity: " + data.current.humidity + "%");
        $('#uvInd').html("UV Index: " + data.current.uvi);
      });
  }
  
  getApi();

  