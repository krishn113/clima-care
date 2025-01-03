import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { PiThermometer } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaWind  , FaCalendar} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const WeatherCard = () => {
  const { weather } = useWeather(); 

 
  if (!weather) return null;

  
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  return (
      <div className="bg-gray-800 text-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Now</h2>
        <div className="flex gap-3 mb-6 justify-between text-center">
          <p className="capitalize text-gray-300 text-lg"><span className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</span>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="text-3xl justify-items-start"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 text-left text-gray-500">
          <p className="text-base"><PiThermometer class="mb-1 text-lg"/> <span className="font-bold">{Math.round(weather.main.feels_like)}°C</span></p>
          <p className="text-base"><WiHumidity class="mb-1 text-lg"/> <span className="font-bold">{weather.main.humidity}%</span></p>
          <p className="text-base"><FaWind class="mb-1 text-lg"/> <span className="font-bold">{weather.wind.speed} m/s</span></p>
        </div>
        <hr className="my-4 border-gray-600" />
        <p className="text-sm text-gray-500"> <FaCalendar /> {currentDate}</p>
        <p className="text-sm text-gray-500 mt-2"><IoLocation />{weather.name}, {weather.sys.country}</p>
      </div>
  );
};

export default WeatherCard;

