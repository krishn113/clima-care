import React, { createContext, useState, useContext } from 'react';
import { fetchWeather } from '../components/fetchWeather';

// Create Weather Context
const WeatherContext = createContext();

// Weather Provider Component
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (cityName) => {
    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
    } catch (error) {
      setWeather(null); // Handle invalid city or API error
    }
  };

  const handleLocationSearch = async () => {
    try {
      const data = await fetchWeather(null);
      setWeather(data);
    } catch (error) {
      setWeather(null); // Handle invalid city or API error
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, handleSearch , handleLocationSearch }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom Hook to Use Weather Context
export const useWeather = () => {
  return useContext(WeatherContext);
};
