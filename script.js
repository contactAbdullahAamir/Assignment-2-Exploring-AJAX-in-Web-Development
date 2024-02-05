function getWeather() {
    var apiKey = '07134c737bd144409ad145225240502';
    var location = document.getElementById('location').value;

    if (location.trim() === '') {
        alert('Please enter a valid location.');
        return;
    }

    var apiUrl = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';
    
    $.ajax({
        url: apiUrl,
        data: {
            key: apiKey,
            q: location,
            format: 'json',
            num_of_days: 1 
        },
        type: 'GET',
        success: function(response) {
            displayWeather(response);
        },
        error: function(error) {
            console.log('Error fetching weather data:', error);
        }
    });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = ''; // Clear previous content

    if (data.data && data.data.current_condition) {
        var currentCondition = data.data.current_condition[0];
        var temperature = currentCondition.temp_C;
        var description = currentCondition.weatherDesc[0].value;

        var weatherHtml = '<p>Temperature: ' + temperature + '°C</p>';
        weatherHtml += '<p>Description: ' + description + '</p>';

        weatherInfo.innerHTML = weatherHtml;
    } else {
        weatherInfo.innerHTML = '<p>No weather data available for the specified location.</p>';
    }
}