import React from 'react';
import SearchBar from './components/SearchBar';
import { WeatherProvider } from './context/WeatherContext';
import WeatherAndHealth from './components/WeatherAndHealth';

const App = () => {

  return (
  <WeatherProvider>
    <div className="min-h-screen bg-slate-700 flex flex-col items-center">
      <SearchBar />
      <WeatherAndHealth/>
    </div>
  </WeatherProvider>
  );
};

export default App;
