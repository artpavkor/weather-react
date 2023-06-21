# Weather App

This is a weather application that displays the current weather and forecast for the next 5 days. It also features two graphs showing temperature and humidity trends. The app includes a map that shows the city where the weather is being displayed, which is retrieved using the GeoDB Cities API for latitude and longitude data. The weather data is sourced from the OpenWeatherMap API.

## Features

- Current weather display
- 5-day weather forecast
- Temperature and humidity graphs
- Map showing the city's location
- Integration with GeoDB Cities API
- Integration with OpenWeatherMap API

## Technologies Used

The following technologies and libraries were used to develop this application:

- React.js
- moment.js
- Recharts
- react-leaflet
- react-spinners
- Sass
- react-bootstrap

## Installation

1. Clone the repository:

```
https://github.com/artpavkor/weather-react.git
```

2. Install the dependencies:

```
cd your-repo
npm install
```

3. Create a config file to store your API keys. You will need API keys for both GeoDB Cities API and OpenWeatherMap API. The config file should be placed in the root directory and named `config.js`. The file should have the following structure:

```javascript
// config.js
const config = {
  geoDBCitiesAPIKey: 'YOUR_GEODB_CITIES_API_KEY',
  openWeatherMapAPIKey: 'YOUR_OPENWEATHERMAP_API_KEY',
};

export default config;
```

4. Start the development server:

```
npm start
```

5. Open the app in your browser:

```
http://localhost:3000
```

## Usage

1. Upon opening the app, it will display the current weather information for your current location by default.

2. You can search for a specific city by entering its name or selecting it from the suggestions that appear while typing.

3. The app will update the weather information and display the forecast for the next 5 days.

4. The temperature and humidity graphs will show the trends for the selected location.

5. The map will indicate the city's location based on the latitude and longitude data retrieved from the GeoDB Cities API.

---

That's it! You now have a weather application that can display current weather and forecasts, with temperature and humidity graphs, and a map showing the location. Enjoy exploring the weather!
