import React, { useState, useEffect } from 'react';

export default function WeatherWidget () {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        // Fetch weather data based on latitude, longitude, and API key
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=702b816b331a15a08db1b932b7826bbc`);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        // Retrieve the current position using the Geolocation API
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            // Fetch weather data using the obtained latitude and longitude
            fetchWeatherData(latitude, longitude);
          },
          error => {
            console.error('Error getting location:', error);
            setLoading(false);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    // Call the getLocation function when the component mounts
    getLocation();
  }, []);

  return (
    <div className="weather-widget">
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].main}</p>
        </>
      ) : (
        <p>Unable to fetch weather data.</p>
      )}
    </div>
  );
};
