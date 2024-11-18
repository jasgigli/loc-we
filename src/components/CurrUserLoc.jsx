import React, { useEffect, useState } from "react";
import Weather from "./Weather";

const CurrUserLoc = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
  });
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setLocation({
        latitude: lat,
        longitude: lon,
      });

      // Fetch city name using reverse geocoding
      fetchCityName(lat, lon);
    });
  }, []);

  const fetchCityName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      const data = await response.json();
      const city = data.name;

      setLocation((prevLocation) => ({
        ...prevLocation,
        city: city,
      }));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching city name:", error);
      setLoading(false);
    }
  };

  return (
    <div className="location-container">
      <h1 className="location-title">Current Weather</h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        location.city && (
          <div className="location-info">
            <h2 className="city-name">{location.city}</h2>
            <Weather lat={location.latitude} lon={location.longitude} />
          </div>
        )
      )}
    </div>
  );
};

export default CurrUserLoc;
