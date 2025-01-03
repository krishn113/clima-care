import React, { createContext, useState, useContext , useEffect} from 'react';
import { fetchData } from '../components/fetchData';


const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const handleSearch = async (cityName) => {
    try {
      const dataResponse = await fetchData(cityName);
      setData(dataResponse);
    } catch (error) {
      setData(null); 
    }
  };

  useEffect(() => {
    handleSearch(null);
  }, []);

  return (
    <DataContext.Provider value={{data, handleSearch}}>
      {children}
    </DataContext.Provider>
  );
};


export const useData = () => {
  return useContext(DataContext);
};
