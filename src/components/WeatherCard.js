import React from 'react';
import { useData } from '../context/DataContext';
import { PiThermometer } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaWind, FaCalendar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const WeatherCard = () => {
  const { data } = useData(); // Destructure weather from context

  // Check if weather data exists before rendering
  if (!data) return null;

  // Format the current date
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="bg-gray-800 text-white p-10 rounded-2xl shadow-lg h-full">
      <h2 className="text-2xl font-bold mb-4">Now</h2>
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <p className="text-5xl font-bold mb-1">{data.weather.main.temp.toFixed()}°C</p>
          <p className="capitalize text-gray-300 text-lg">{data.weather.weather[0].description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather.weather[0].icon}@2x.png`}
          alt={data.weather.weather[0].description}
          className="text-lg"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 text-center text-gray-300 mb-4">
        <div className="flex flex-col items-center">
          <PiThermometer className="text-2xl mb-1" />
          <p className="text-sm">
            Feels Like: <span className="font-bold">{Math.round(data.weather.main.feels_like)}°C</span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <WiHumidity className="text-2xl mb-1" />
          <p className="text-sm">
            Humidity: <span className="font-bold">{data.weather.main.humidity}%</span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaWind className="text-2xl mb-1" />
          <p className="text-sm">
            Wind Speed: <span className="font-bold">{data.weather.wind.speed} m/s</span>
          </p>
        </div>
      </div>
      <hr className="mb-6 border-gray-600" />
      <div className="text-sm text-gray-400 flex flex-col">
        <p className="flex items-center gap-2">
          <FaCalendar /> {currentDate}
        </p>
        <p className="flex items-center gap-2 mt-2">
          <IoLocation /> {data.weather.name}, {data.weather.sys.country}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
