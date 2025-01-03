import React from 'react';
import { useData } from '../context/DataContext';
import { FaWind } from "react-icons/fa";

const PollutionCard = () => {
  const { data } = useData(); // Destructure pollution from context

  // Check if pollution data exists before rendering
  if (!data) return null;

  // Extract air quality data
  const { aqi } = data.pollution.list[0].main;
  const { pm2_5, so2, no2, o3 } = data.pollution.list[0].components;

  // Determine air quality category
  const getAqiLabel = (aqi) => {
    switch (aqi) {
      case 1: return { label: 'Good', color: 'bg-green-500' };
      case 2: return { label: 'Fair', color: 'bg-yellow-500' };
      case 3: return { label: 'Moderate', color: 'bg-orange-500' };
      case 4: return { label: 'Poor', color: 'bg-red-500' };
      case 5: return { label: 'Very Poor', color: 'bg-purple-500' };
      default: return { label: 'Unknown', color: 'bg-gray-500' };
    }
  };

  const { label, color } = getAqiLabel(aqi);

  return (
    <div className="bg-gray-800 text-white p-10 rounded-2xl shadow-lg">
      <div className='grid grid-rows-2 gap-10'>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Air Quality Index</h2>
        <span
          className={`text-sm px-3 py-1 rounded-full text-gray-800 ${color}`}
        >
          {label}
        </span>
      </div>
      <div className="grid grid-cols-5 gap-4 text-center text-gray-300">
      <FaWind className="text-2xl mb-1" />
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase tracking-wide">PM2.5</p>
          <p className="text-lg font-semibold text-blue-200">{pm2_5.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase tracking-wide">SO2</p>
          <p className="text-lg font-semibold text-pink-200">{so2.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase tracking-wide">NO2</p>
          <p className="text-lg font-semibold text-green-200">{no2.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase tracking-wide">O3</p>
          <p className="text-lg font-semibold text-red-200">{o3.toFixed(2)}</p>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default PollutionCard;
