import React from 'react';
import { useData } from '../context/DataContext';
import { FaSun, FaMoon } from "react-icons/fa";

const SunCard = () => {
  const { data } = useData();

  if (!data || !data.weather) return null;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const sunrise = formatTime(data.weather.sys.sunrise);
  const sunset = formatTime(data.weather.sys.sunset);

  return (
    <div className="bg-gray-800 text-white p-10 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">Sunrise & Sunset</h2>
      <div className="grid grid-cols-2 gap-10 text-center text-gray-300">
        {/* Sunrise Section */}
        <div className="flex flex-col items-center space-y-2">
          <FaSun className="text-4xl text-yellow-400" />
          <p className="text-sm uppercase tracking-wide">Sunrise</p>
          <p className="text-lg font-semibold text-yellow-200">{sunrise}</p>
        </div>
        {/* Sunset Section */}
        <div className="flex flex-col items-center space-y-2">
          <FaMoon className="text-4xl text-indigo-400" />
          <p className="text-sm uppercase tracking-wide">Sunset</p>
          <p className="text-lg font-semibold text-indigo-200">{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default SunCard;
