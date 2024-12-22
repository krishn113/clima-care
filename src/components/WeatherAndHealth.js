import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherAndHealth = () => {
  // Ensure `pollutionData` is available in context

  const generateHealthAdvice = (aqi) => {
    if (!aqi) return "Loading advice...";
    if (aqi === 1) return "Air quality is good. Enjoy your day!";
    if (aqi === 2) return "Air quality is fair. Sensitive groups should be cautious.";
    if (aqi === 3) return "Air quality is moderate. Limit outdoor activities.";
    if (aqi === 4) return "Air quality is poor. Avoid outdoor activities.";
    return "Air quality is very poor. Stay indoors and wear a mask.";
  };

  const aqi = 100; // Safely access AQI value

  return (
    <div className="min-h-[200vh] p-6 w-full">
<div class="grid grid-cols-3 gap-6">
  <div class="col-span-1">
    {/* Left Panel */}
    <WeatherCard/>
  </div>
  <div class="col-span-2">
        {/* Right Panel */}
        <div className="grid grid-rows-2 gap-6">
          {/* Top Panel: Pollution Data */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Pollution Data</h2>
            {aqi ? (
              <p>
                <strong>Air Quality Index:</strong> {aqi}
              </p>
            ) : (
              <p>Loading pollution data...</p>
            )}
          </div>

          {/* Bottom Panel: Health Advice */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Health Advice</h2>
            <p>{generateHealthAdvice(aqi)}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAndHealth;
