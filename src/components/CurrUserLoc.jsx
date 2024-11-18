import React, { useEffect, useState } from "react";
import Weather from "./Weather";

const CurrUserLoc = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
  });
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
    } catch (error) {
      console.error("Error fetching city name:", error);
    }
  };

  return (
    <div>
      {location.latitude && location.longitude && location.city && (
        <div>
          <h1>Location: {location.city}</h1>
        </div>
      )}

      {location.latitude && location.longitude && (
        <Weather
          lat={location.latitude}
          lon={location.longitude}
          city={location.city}
        />
      )}
    </div>
  );
};

export { CurrUserLoc };
