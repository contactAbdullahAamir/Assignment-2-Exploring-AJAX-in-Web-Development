
#   Assignment: Exploring AJAX in Web Development
## Weather App
This simple Weather App allows users to retrieve current weather information for a specified location. The app is built using HTML, Bootstrap for styling, jQuery for asynchronous requests, and a custom JavaScript script.

## Usage

1.  Open the `index.html` file in a web browser.
2.  Enter the desired location (city name) in the input field.
3.  Click the "Get Weather" button to retrieve and display the current weather information.

## Dependencies

-   [Bootstrap](https://getbootstrap.com/) v5.3.2
-   [jQuery](https://jquery.com/) v3.6.4

These dependencies are included via CDN links in the HTML file.

## Code Structure

-   **index.html:** HTML structure for the Weather App, including input fields, buttons, and a container for displaying weather information.
    
-   **style.css:** Contains custom styling for the Weather App.
    
-   **script.js:** JavaScript file with functions to interact with the World Weather Online API and display weather information.
    

## Weather API

The app uses the World Weather Online API to fetch weather data. Please note that you need to obtain an API key from World Weather Online and replace the placeholder in the `script.js` file with your actual API key.

javascriptCopy code

`var apiKey = '07134c737bd144409ad145225240502';` 

## Functionality

-   **getWeather():** Retrieves weather data from the API based on the user-inputted location. It performs input validation and displays an alert for invalid inputs.
    
-   **displayWeather(data):** Takes the retrieved weather data and displays the temperature and description in the designated HTML element. If no data is available, a message is displayed.
    

## Styling

The app includes minimal styling using Bootstrap for a clean and responsive layout.

## Note

Ensure an internet connection for the app to fetch weather data from the World Weather Online API.
