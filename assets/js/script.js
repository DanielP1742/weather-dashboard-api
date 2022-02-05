var currentCityWeatherEl = document.querySelector("#currentWeather")
var fiveDayForecastEl = document.querySelector("#currentWeather")
var submitbutton = document.querySelector('#submit')
var inputCity = document.querySelector('#searchEntry')
var forecastCardOneEl = document.querySelector("#card-1")
var forecastCardTwoEl = document.querySelector("#card-2")
var forecastCardThreeEl = document.querySelector("#card-3")
var forecastCardFourEl = document.querySelector("#card-4")
var forecastCardFiveEl = document.querySelector("#card-5")


var currentCityWeather = function (event) {
    event.preventDefault();
    var enteredCity = inputCity.value

    //Inital population of data for Current City Weather

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + enteredCity + "&units=imperial&appid=27b3d2272a78678ccc982ddeb1ff31a9").then(function (response) {
        response.json().then(function (data) {
            var cityNameEl = document.createElement("h2");
            var weatherMainEl = document.createElement("p");
            var mainTempEl = document.createElement("p");
            var humidityEl = document.createElement("p");
            var windSpeedEl = document.createElement("p");

            // template literals 
            // string = `literal string and ${VARIABLE}`
            console.log(data)

            var cityName = data.name;
            var weatherIcon = data.weather[0].icon
            var iconLink = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
            var weatherMain = data.weather[0].main
            var mainTemp = data.main.temp
            var humidity = data.main.humidity
            var windSpeed = data.wind.speed

            cityNameEl.textContent = cityName;
            weatherMainEl.textContent = "Current Weather Condition: " + weatherMain
            mainTempEl.textContent = "Current Temperture " + mainTemp + " F "
            humidityEl.textContent = "Humidity " + humidity + "%"
            windSpeedEl.textContent = "Current Wind Speed " + windSpeed + " mph "

            var iconEl = document.createElement('img');
            iconEl.src = iconLink;

            currentCityWeatherEl.append(cityNameEl);
            currentCityWeatherEl.append(iconEl);
            currentCityWeatherEl.append(weatherMainEl);
            currentCityWeatherEl.append(mainTempEl);
            currentCityWeatherEl.append(humidityEl);
            currentCityWeatherEl.append(windSpeedEl);


        })
    })

}



var fiveDayForecast = function () {
    var enteredCity = inputCity.value
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + enteredCity + "&units=imperial&appid=27b3d2272a78678ccc982ddeb1ff31a9")
        .then(
            function (response) {
                response.json().then(
                    function (data) {
                        var lat = data.coord.lat
                        var lon = data.coord.lon

                        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=27b3d2272a78678ccc982ddeb1ff31a9")
                            .then(
                                function (response) {
                                    response.json().then(
                                        function (data) {
                                            console.log(data)

                                            // fetch uvi and append to current
                                            var uvi = data.current.uvi
                                            uviEL = "Current UVI Index " + uvi;
                                            
                                            currentCityWeatherEl.append(uviEL);

                                            // filling 5 day forecast Cards

                                            var cardOneDateEl = document.createElement("p");
                                            var cardOneIconEl = document.createElement("img")
                                            var cardOneTempEl = document.createElement("p");
                                            var cardOneWindEl = document.createElement("p");
                                            var cardOneHumidityEl = document.createElement("p");

                                            var cardOneDate = moment().calendar();                   
                                            var weatherIconCardOne = data.daily[0].weather[0].icon
                                            var cardOneWeatherIcon =  "https://openweathermap.org/img/wn/" + weatherIconCardOne + "@2x.png"
                                            var cardOneTemp = data.daily[0].feels_like.day
                                            var cardOneWind = data.daily[0].wind_speed
                                            var cardOneHumidity = data.daily[0].humidity

                                            
                                            cardOneDateEl.textContent = cardOneDate
                                            cardOneIconEl.src = cardOneWeatherIcon
                                            cardOneTempEl.textContent = "Temp: " + cardOneTemp
                                            cardOneWindEl.textContent = "Wind: " + cardOneWind
                                            cardOneHumidityEl.textContent = "Humitiy: " + cardOneHumidity + "%"

                                            forecastCardOneEl.append(cardOneDateEl);
                                            forecastCardOneEl.append(cardOneIconEl);
                                            forecastCardOneEl.append(cardOneTempEl);
                                            forecastCardOneEl.append(cardOneWindEl);
                                            forecastCardOneEl.append(cardOneHumidityEl);

                                            // Card 2 

                                            var cardTwoDateEl = document.createElement("p");
                                            var cardTwoIconEl = document.createElement("img")
                                            var cardTwoTempEl = document.createElement("p");
                                            var cardTwoWindEl = document.createElement("p");
                                            var cardTwoHumidityEl = document.createElement("p");

                                            var cardTwoDate = moment().subtract(1,'day').calendar();                      
                                            var weatherIconCardTwo = data.daily[1].weather[0].icon
                                            var cardTwoWeatherIcon =  "https://openweathermap.org/img/wn/" + weatherIconCardTwo + "@2x.png"
                                            var cardTwoTemp = data.daily[1].feels_like.day
                                            var cardTwoWind = data.daily[1].wind_speed
                                            var cardTwoHumidity = data.daily[1].humidity

                                            
                                            cardTwoDateEl.textContent = cardTwoDate
                                            cardTwoIconEl.src = cardTwoWeatherIcon
                                            cardTwoTempEl.textContent = "Temp: " + cardTwoTemp
                                            cardTwoWindEl.textContent = "Wind: " + cardTwoWind
                                            cardTwoHumidityEl.textContent = "Humitiy: " + cardTwoHumidity + "%"

                                            forecastCardTwoEl.append(cardTwoDateEl);
                                            forecastCardTwoEl.append(cardTwoIconEl);
                                            forecastCardTwoEl.append(cardTwoTempEl);
                                            forecastCardTwoEl.append(cardTwoWindEl);
                                            forecastCardTwoEl.append(cardTwoHumidityEl)

                                            //Card 3 




                                            


                                            
                                            

                                            
                                                
                                        }
                                    );
                                }
                            )
                    }
                )
            }
        )

};

submitbutton.addEventListener("click", currentCityWeather);
submitbutton.addEventListener("click", fiveDayForecast);



//OpenWeather API Key:
// 27b3d2272a78678ccc982ddeb1ff31a9



//Pseudo Coding this project out:

// 3 toppest level things that need to happen:


//To Do:
//Figure out how to get the desired info about of the array

// City Searches cause 5 day forcast to populate

// City searches are saved in local storage and append divs 