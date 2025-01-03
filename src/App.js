import React from 'react';
import SearchBar from './components/SearchBar';
import { DataProvider } from './context/DataContext';
import Dashboard from './components/Dashboard';
import HealthAdvice from './components/HealthAdvice';

const App = () => {

  return (
  <DataProvider>
    <div className="min-h-screen bg-slate-700 flex flex-col items-center">
      <SearchBar />
      <Dashboard/>
      <HealthAdvice/>
    </div>
  </DataProvider>
  );
};

export default App;
