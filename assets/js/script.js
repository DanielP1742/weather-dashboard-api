//OpenWeather API Key:
// 27b3d2272a78678ccc982ddeb1ff31a9



//Pseudo Coding this project out:

// 3 things that need to happen:

// Get an active button that actually works -done
// Get the form value to be captured -done
// Get the API on the button press -done
// current API data to "imperial" messsurements -done
// figure out how to append something to current space -done
// apppend 

//To Do:
//Figure out how to get the desired info about of the array

// City Searches cause 5 day forcast to populate

// City searches are saved in local storage and append divs 

var currentCityEl = document.querySelector("#currentWeather")
var submitbutton = document.querySelector ('#submit')
var inputCity = document.querySelector('#searchEntry')
var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=27b3d2272a78678ccc982ddeb1ff31a9"

var citySearch = function(event) {
    event.preventDefault();
    console.log("the button was pressed" );
    var enteredCity = inputCity.value
    console.log(enteredCity);

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + enteredCity + "&units=imperial&appid=27b3d2272a78678ccc982ddeb1ff31a9").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            var cityNameEl = document.createElement("h2");
            //var weatherMainEl = document.createElement("p");
            var mainTempEl = document.createElement("p");
            var humidityEl = document.createElement("p");
            var windSpeedEl = document.createElement("p");

            var cityName = data.name;
            var weatherMainEl = data.weather.description
            var mainTemp = data.main.temp 
            var humidity = data.main.humidity
            var windSpeed = data.wind.speed
            console.log(cityName);
            //console.log(weatherMain);
            console.log(mainTemp);
            console.log(windSpeed)
            
             cityNameEl.textContent = cityName;
             mainTempEl.textContent = "Current Temperture " + mainTemp + " F "
             humidityEl.textContent = "Humidity " + humidity + "%"
             windSpeedEl.textContent = "Current Wind Speed " + windSpeed + " mph "


             console.log(cityNameEl)

            currentCityEl.append(cityNameEl);
            currentCityEl.append(mainTempEl);
            currentCityEl.append(humidityEl);
            currentCityEl.append(windSpeedEl);

        });
    
    })
       
      
}



submitbutton.addEventListener("click", citySearch);