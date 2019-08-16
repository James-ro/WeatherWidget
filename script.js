
/*----------------------------------------------------*/
let appId = '69eb806ae1f5d9152bad587b04da1929';
let units = 'metric';
let searchMethod = 'q';


/*-------------------------URL Script---------------------------*/
function searchWeather(searchTerm) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&appid=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  })
}


/*-------------------------Image Changer---------------------------*/
function init(resultFromServer) {
  switch (resultFromServer.weather[0].main) {
    case 'Clear':
      document.getElementById("photo").style.backgroundImage = 'url("Images/Clear.jpg")';
      document.getElementById("weatherIcon").style.backgroundImage = 'url("Images/sunicon.png")';
      break;

    case 'Clouds':
      document.getElementById("photo").style.backgroundImage = 'url("Images/Cloudy.jpg")';
      document.getElementById("weatherIcon").style.backgroundImage = 'url("Images/cloudicon.png")';
      break;

    case 'Rain':
    case 'Drizzle': 
    case 'Mist': 
      document.getElementById("photo").style.backgroundImage = 'url("Images/Rain.jpg")';  
      document.getElementById("weatherIcon").style.backgroundImage = 'url("Images/rainicon.png")';
      break;
    
    case 'Thunderstorm':
      document.getElementById("photo").style.backgroundImage = 'url("Images/Storm.jpg")';
      document.getElementById("weatherIcon").style.backgroundImage = 'url("Images/stormicon.png")';
      break;

    case 'Snow':
      document.getElementById("photo").style.backgroundImage = 'url("Images/Snow.jpg")';
      document.getElementById("weatherIcon").style.backgroundImage = 'url("Images/snowicon.png")';
      break;

    default:
      break;  
  }

let minTemperature = document.getElementById('minTemperature');
let maxTemperature = document.getElementById('maxTemperature');
let temperature = document.getElementById('temperature');
let cityHeader = document.getElementById('cityHeader');
let windSpeed = document.getElementById('windSpeed');
let humidity = document.getElementById('humidity');
let unhide = document.getElementById('weatherContainer');

unhide.style.visibility = "visible";
minTemperature.innerHTML = Math.round(resultFromServer.main.temp_min);
maxTemperature.innerHTML = Math.round(resultFromServer.main.temp_max);
temperature.innerHTML = Math.round(resultFromServer.main.temp) + "<span>°C</span>";
cityHeader.innerHTML = resultFromServer.name;
windSpeed.innerHTML = "Winds: " + Math.round(resultFromServer.wind.speed) + " mph";
humidity.innerHTML = "Humidity: " + Math.round(resultFromServer.main.humidity) + "%";
}

/*--------------------------Button Script--------------------------*/
document.getElementById('searchBtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if (searchTerm)
    searchWeather(searchTerm);
})






