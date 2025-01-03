
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const POLLUTION_URL = 'https://api.openweathermap.org/data/2.5/air_pollution';
const GEOCODING_URL = 'http://api.openweathermap.org/geo/1.0/direct';

console.log(API_KEY);

const getCoordinates = async (city) => {
  if (city) {
    
    const geocodingResponse = await fetch(`${GEOCODING_URL}?q=${city}&limit=1&appid=${API_KEY}`);
    if (!geocodingResponse.ok) {
      throw new Error('Error fetching coordinates for the provided city.');
    }
    const geocodingData = await geocodingResponse.json();
    if (geocodingData.length === 0) {
      throw new Error('City not found. Please check the city name.');
    }
    
    const { lat, lon } = geocodingData[0];
    return { lat, lon };
  } else {
    
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser.'));
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lon: longitude });
        },
        (error) => {
          reject(new Error('Unable to retrieve your location.'));
        }
      );
    });
  }
};


export const fetchData = async (city) => {
  try {
  
    const { lat, lon } = await getCoordinates(city);

   
    const weatherResponse = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    if (!weatherResponse.ok) {
      throw new Error('Error fetching weather data.');
    }
    const weatherData = await weatherResponse.json();

    const pollutionResponse = await fetch(`${POLLUTION_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    if (!pollutionResponse.ok) {
      throw new Error('Error fetching pollution data.');
    }
    const pollutionData = await pollutionResponse.json();

    return { weather: weatherData, pollution: pollutionData };
  } catch (error) {
    throw new Error(error.message);
  }
};
