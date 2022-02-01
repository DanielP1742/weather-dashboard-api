//OpenWeather API Key:
// 27b3d2272a78678ccc982ddeb1ff31a9



//Pseudo Coding this project out:

// 3 things that need to happen:

// Get an active button that actually works -done
// Get the form value to be captured -done
// Get the API on the button press -done
// current API data to "imperial" messsurements -done

//To Do:
//Figure out how to get the desired info about of the array
//then figure out how to append that to somewhere


// City Searches cause city specific information populate Search results area

// City Searches cause 5 day forcast to populate

// City searches are saved in local storage and append divs 

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
            console.log(data)
        });
    })
    
      
}



submitbutton.addEventListener("click", citySearch);