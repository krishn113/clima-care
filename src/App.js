import { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import LocationSelector from "./components/LocationSelector";
import AQIAndWeather from "./components/AQIandWeather";
import HealthAdvice from "./components/HealthTips";
import fetchAQIData from "./components/fetchAQIData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState("New York");
  const [aqiData, setAqiData] = useState(null);

  useEffect(() => {
    const fetchAQI = async () => {
      toast.info(`Fetching AQI data for ${query}`);
      const data = await fetchAQIData(query);
      if (data) {
        setAqiData(data);
        toast.success(`AQI data for ${query} fetched successfully!`);
      } else {
        toast.error(`Failed to fetch AQI data for ${query}`);
      }
    };

    fetchAQI();
  }, [query]);

  return (
    <div className="max-w-screen-md mx-auto mt-4 py-5 px-6 bg-gradient-to-br from-green-500 to-blue-600 h-fit shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery} />
      <LocationSelector setQuery={setQuery} />
      {console.log("AQI Data:", aqiData)}
      {aqiData && <AQIAndWeather data={aqiData} />}
      <HealthAdvice aqi={aqiData?.aqi} />
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
