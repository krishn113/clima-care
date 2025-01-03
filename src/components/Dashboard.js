import React from "react";
import WeatherCard from "./WeatherCard";
import PollutionCard from "./PollutionCard"
import SunCard from "./SunCard";

const Dashboard = () => {

  return (
    <div className="p-6 w-full">
      <div class="grid grid-cols-3 gap-6">
        {/* Left Panel */}
        <div class="col-span-1 h-full">
          <WeatherCard/>
        </div>
        {/* Right Panel */}
        <div class="col-span-2">
          <div className="grid grid-rows-2 gap-6">
            {/* Top Panel: Pollution Data */}
            <PollutionCard />
            {/* Bottom Panel: Health Advice */}
            <SunCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;