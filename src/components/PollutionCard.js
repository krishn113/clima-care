import React from 'react';
import { useData } from '../context/DataContext';
import { FaWind } from "react-icons/fa";

const PollutionCard = () => {
  const { data } = useData(); 

 
  if (!data) return null;


  const { aqi } = data.pollution.list[0].main;
  const { pm2_5, so2, no2, o3 } = data.pollution.list[0].components;

 
  const getAqiLabel = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return { label: 'Good', color: 'bg-green-500' };
    } else if (aqi >= 51 && aqi <= 100) {
      return { label: 'Moderate', color: 'bg-yellow-500' };
    } else if (aqi >= 101 && aqi <= 150) {
      return { label: 'Unhealthy for Sensitive Groups', color: 'bg-orange-500' };
    } else if (aqi >= 151 && aqi <= 200) {
      return { label: 'Unhealthy', color: 'bg-red-500' };
    } else if (aqi >= 201 && aqi <= 300) {
      return { label: 'Very Unhealthy', color: 'bg-purple-500' };
    } else if (aqi > 300) {
      return { label: 'Hazardous', color: 'bg-maroon-500' };
    } else {
      return { label: 'Unknown', color: 'bg-gray-500' };
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
