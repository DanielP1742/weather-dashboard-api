var currentCityWeatherEl = document.querySelector("#currentWeather")
var fiveDayForecastEl = document.querySelector("#currentWeather")
var submitbutton = document.querySelector('#submit')
var inputCity = document.querySelector('#searchEntry')
var forecastCardOneEl = document.querySelector("#card-1")
var forecastCardTwoEl = document.querySelector("#card-2")
var forecastCardThreeEl = document.querySelector("#card-3")
var forecastCardFourEl = document.querySelector("#card-4")
var forecastCardFiveEl = document.querySelector("#card-5")
var savedCityDivEl = document.querySelector("#localStoreage")


var currentCityWeather = function (enteredCity) {
   
    //Inital population of data for Current City Weather

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&units=imperial&appid=27b3d2272a78678ccc982ddeb1ff31a9`).then(function (response) {
        response.json().then(function (data) {
            var cityNameEl = document.createElement("h2");
            var weatherMainEl = document.createElement("p");
            var mainTempEl = document.createElement("p");
            var humidityEl = document.createElement("p");
            var windSpeedEl = document.createElement("p");

            console.log(data)

            var cityName = data.name;
            var weatherIcon = data.weather[0].icon
            var iconLink = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
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

            currentCityWeatherEl.innerHTML = ""

            currentCityWeatherEl.append(cityNameEl);
            currentCityWeatherEl.append(iconEl);
            currentCityWeatherEl.append(weatherMainEl);
            currentCityWeatherEl.append(mainTempEl);
            currentCityWeatherEl.append(humidityEl);
            currentCityWeatherEl.append(windSpeedEl);

           


        })
    })

}



var fiveDayForecast = function (enteredCity) {
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

                                            var cardOneDate = moment().add(1, "day").format('l');                    
                                            var weatherIconCardOne = data.daily[0].weather[0].icon
                                            var cardOneWeatherIcon =  "https://openweathermap.org/img/wn/" + weatherIconCardOne + "@2x.png"
                                            var cardOneTemp = data.daily[0].feels_like.day
                                            var cardOneWind = data.daily[0].wind_speed
                                            var cardOneHumidity = data.daily[0].humidity

                                            
                                            cardOneDateEl.textContent = cardOneDate
                                            cardOneIconEl.src = cardOneWeatherIcon
                                            cardOneTempEl.textContent = "Temp: " + cardOneTemp
                                            cardOneWindEl.textContent = "Wind: " + cardOneWind
                                            cardOneHumidityEl.textContent = "Humidity: " + cardOneHumidity + "%"

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

                                            var cardTwoDate = moment().add(2,'day').format('l');                 
                                            var weatherIconCardTwo = data.daily[1].weather[0].icon
                                            var cardTwoWeatherIcon =  "https://openweathermap.org/img/wn/" + weatherIconCardTwo + "@2x.png"
                                            var cardTwoTemp = data.daily[1].feels_like.day
                                            var cardTwoWind = data.daily[1].wind_speed
                                            var cardTwoHumidity = data.daily[1].humidity

                                            
                                            cardTwoDateEl.textContent = cardTwoDate
                                            cardTwoIconEl.src = cardTwoWeatherIcon
                                            cardTwoTempEl.textContent = "Temp: " + cardTwoTemp
                                            cardTwoWindEl.textContent = "Wind: " + cardTwoWind
                                            cardTwoHumidityEl.textContent = "Humidity: " + cardTwoHumidity + "%"

                                            forecastCardTwoEl.append(cardTwoDateEl);
                                            forecastCardTwoEl.append(cardTwoIconEl);
                                            forecastCardTwoEl.append(cardTwoTempEl);
                                            forecastCardTwoEl.append(cardTwoWindEl);
                                            forecastCardTwoEl.append(cardTwoHumidityEl)

                                            //Card 3 

                                            var cardThreeDateEl = document.createElement("p");
                                            var cardThreeIconEl = document.createElement("img")
                                            var cardThreeTempEl = document.createElement("p");
                                            var cardThreeWindEl = document.createElement("p");
                                            var cardThreeHumidityEl = document.createElement("p");

                                            var cardThreeDate = moment().add(3,'day').format('l');                      
                                            var weatherIconCardThree = data.daily[2].weather[0].icon
                                            var cardThreeWeatherIcon =  "https://openweathermap.org/img/wn/" + weatherIconCardThree + "@2x.png"
                                            var cardThreeTemp = data.daily[2].feels_like.day
                                            var cardThreeWind = data.daily[2].wind_speed
                                            var cardThreeHumidity = data.daily[2].humidity

                                            
                                            cardThreeDateEl.textContent = cardThreeDate
                                            cardThreeIconEl.src = cardThreeWeatherIcon
                                            cardThreeTempEl.textContent = "Temp: " + cardThreeTemp
                                            cardThreeWindEl.textContent = "Wind: " + cardThreeWind
                                            cardThreeHumidityEl.textContent = "Humidity: " + cardThreeHumidity + "%"

                                            forecastCardThreeEl.append(cardThreeDateEl);
                                            forecastCardThreeEl.append(cardThreeIconEl);
                                            forecastCardThreeEl.append(cardThreeTempEl);
                                            forecastCardThreeEl.append(cardThreeWindEl);
                                            forecastCardThreeEl.append(cardThreeHumidityEl)

                                            //Card 4

                                            var cardFourDateEl = document.createElement("p");
                                            var cardFourIconEl = document.createElement("img")
                                            var cardFourTempEl = document.createElement("p");
                                            var cardFourWindEl = document.createElement("p");
                                            var cardFourHumidityEl = document.createElement("p");

                                            var cardFourDate = moment().add(4,'day').format('l');                      
                                            var weatherIconCardFour = data.daily[3].weather[0].icon
                                            var cardFourWeatherIcon =  "https://openweathermap.org/img/wn/" + weatherIconCardFour + "@2x.png"
                                            var cardFourTemp = data.daily[3].feels_like.day
                                            var cardFourWind = data.daily[3].wind_speed
                                            var cardFourHumidity = data.daily[3].humidity

                                            
                                            cardFourDateEl.textContent = cardFourDate
                                            cardFourIconEl.src = cardFourWeatherIcon
                                            cardFourTempEl.textContent = "Temp: " + cardFourTemp
                                            cardFourWindEl.textContent = "Wind: " + cardFourWind
                                            cardFourHumidityEl.textContent = "Humidity: " + cardFourHumidity + "%"

                                            forecastCardFourEl.append(cardFourDateEl);
                                            forecastCardFourEl.append(cardFourIconEl);
                                            forecastCardFourEl.append(cardFourTempEl);
                                            forecastCardFourEl.append(cardFourWindEl);
                                            forecastCardFourEl.append(cardFourHumidityEl)


                                            // Card 5

                                            var cardFiveDateEl = document.createElement("p");
                                            var cardFiveIconEl = document.createElement("img")
                                            var cardFiveTempEl = document.createElement("p");
                                            var cardFiveWindEl = document.createElement("p");
                                            var cardFiveHumidityEl = document.createElement("p");

                                            var cardFiveDate = moment().add(5,'day').format('l');                      
                                            var weatherIconCardFive = data.daily[4].weather[0].icon
                                            var cardFiveWeatherIcon =  "https://openweathermap.org/img/wn/" + weatherIconCardFive + "@2x.png"
                                            var cardFiveTemp = data.daily[4].feels_like.day
                                            var cardFiveWind = data.daily[4].wind_speed
                                            var cardFiveHumidity = data.daily[4].humidity

                                            
                                            cardFiveDateEl.textContent = cardFiveDate
                                            cardFiveIconEl.src = cardFiveWeatherIcon
                                            cardFiveTempEl.textContent = "Temp: " + cardFiveTemp
                                            cardFiveWindEl.textContent = "Wind: " + cardFiveWind
                                            cardFiveHumidityEl.textContent = "Humidity: " + cardFiveHumidity + "%"

                                            forecastCardFiveEl.append(cardFiveDateEl);
                                            forecastCardFiveEl.append(cardFiveIconEl);
                                            forecastCardFiveEl.append(cardFiveTempEl);
                                            forecastCardFiveEl.append(cardFiveWindEl);
                                            forecastCardFiveEl.append(cardFiveHumidityEl)



                                            
                                            

                                            
                                                
                                        }
                                    );
                                }
                            )
                    }
                )
            }
        )

};

var storedCity = function(event){
    var enteredCity = inputCity.value
    var newCityDivEl = document.createElement("button");
    newCityDivEl.className = "newCityCreated"

    newCityDivEl.textContent = enteredCity;

    savedCityDivEl.append(newCityDivEl)
    newCityDivEl.addEventListener("click", newCityformsubmit)

    var cityArray = JSON.parse(localStorage.getItem('searchedhistory'))
    cityArray.push(enteredCity)

    localStorage.setItem("searchedhistory", JSON.stringify(cityArray));



}

var formsubmit = function(event) {
    var enteredCity = inputCity.value
    currentCityWeather(enteredCity)
    fiveDayForecast(enteredCity)
    storedCity(event)
}
var newCityformsubmit = function(event) {
    var enteredCity = this.textContent;
    currentCityWeather(enteredCity)
    fiveDayForecast(enteredCity)
}

submitbutton.addEventListener("click", formsubmit);



if(localStorage.getItem("searchedhistory") === null) { 

    localStorage.setItem("searchedhistory", JSON.stringify([]));



} else {
var cityArray = JSON.parse(localStorage.getItem('searchedhistory'))

for (var i = 0; i < cityArray.length; i++) {

var newCityDivEl = document.createElement("button");
newCityDivEl.className = "newCityCreated"
newCityDivEl.textContent = cityArray[i];
savedCityDivEl.append(newCityDivEl)

newCityDivEl.addEventListener("click", newCityformsubmit)

}}
