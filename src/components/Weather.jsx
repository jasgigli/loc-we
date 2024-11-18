import React, { useState, useEffect } from "react";

const Weather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data using OpenWeatherMap API
  const fetchWeather = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather(data); // Store weather data
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchWeather(lat, lon); // Example coordinates (latitude, longitude)
  }, []); // Empty array ensures it runs once when component mounts

  return (
    <div>
      {weather && (
        <div>
          <h1>Temperature: {weather.main.temp}°C</h1>
        </div>
      )}
    </div>
  );
};

export default Weather;
