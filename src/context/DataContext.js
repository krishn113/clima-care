import React, { createContext, useState, useContext } from 'react';
import { fetchData } from '../components/fetchData';

// Create Data Context
const DataContext = createContext();

// Weather Provider Component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const handleSearch = async (cityName) => {
    try {
      const dataResponse = await fetchData(cityName);
      setData(dataResponse);
    } catch (error) {
      setData(null); // Handle invalid city or API error
    }
  };

  return (
    <DataContext.Provider value={{data, handleSearch}}>
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook to Use Weather Context
export const useData = () => {
  return useContext(DataContext);
};
