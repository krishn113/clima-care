import React from 'react';
import SearchBar from './components/SearchBar';
import { DataProvider } from './context/DataContext';
import WeatherAndHealth from './components/WeatherAndHealth';

const App = () => {

  return (
  <DataProvider>
    <div className="min-h-screen bg-slate-700 flex flex-col items-center">
      <SearchBar />
      <WeatherAndHealth/>
    </div>
  </DataProvider>
  );
};

export default App;
