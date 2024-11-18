import React, { useState, useEffect } from "react";

const Weather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emoji, setEmoji] = useState("🌥️");

  const fetchWeather = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
      setLoading(false);
      setEmoji(getWeatherEmoji(data.weather[0].main)); // Set appropriate emoji
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const getWeatherEmoji = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return "🌞"; // Sunny
      case "clouds":
        return "☁️"; // Cloudy
      case "rain":
        return "🌧️"; // Rainy
      case "snow":
        return "❄️"; // Snowy
      case "thunderstorm":
        return "⚡"; // Thunderstorm
      case "mist":
        return "🌫️"; // Misty
      default:
        return "🌥️"; // Default cloudy
    }
  };

  useEffect(() => {
    fetchWeather(lat, lon);
  }, [lat, lon]);

  return (
    <div className="weather-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        weather && (
          <div className="weather-info">
            <div className="weather-icon">
              <span className="emoji">{emoji}</span>
            </div>
            <div className="temperature-info">
              <h3 className="temperature">{weather.main.temp}°C</h3>
              <p className="description">{weather.weather[0].description}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
