import React, { useState } from "react";
import { useData } from '../context/DataContext';
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const SearchBar = () => {
  const [input, setInput] = useState("");
  const {handleSearch} = useData(); // Assuming getCurrentLocation exists in the context

  const onSearch = () => {
    if (input) handleSearch(input);
    setInput('');
  };

  const onLocationSearch = () => {
    setInput('');
    handleSearch(null);
  };

  return (
    <div className="text-white w-full px-8 py-6 flex justify-between items-center">  

      <div className="flex items-center space-x-2">
        <div className="text-3xl font-bold flex items-center">
          ClimaCare
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full shadow-md space-x-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city..."
        className="bg-transparent outline-none text-gray-300 placeholder-gray-500 w-96 px-4 py-3"  
      />
        <button
        onClick={onSearch}
        className="bg-purple-400 text-white px-4 py-3 rounded-full text-lg font-medium hover:bg-purple-500 transition"
        >
        <FaSearch size={20} className="text-white" />  {/* Increase icon size */}
        </button>

      </div>

      {/* Current Location Button */}
      <button
        onClick={onLocationSearch}
        className="flex items-center space-x-3 bg-purple-400 px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-500 transition"
        >
        <FaMapMarkerAlt size={20} />
        <span className="text-xl font-medium">Current Location</span> 
      </button>

    </div>
  );
};

export default SearchBar;
