const API_KEY = '80738e0fd9d0f1636258b4ac4bdf2ff3';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const POLLUTION_URL = 'https://api.openweathermap.org/data/2.5/air_pollution';
const GEOCODING_URL = 'http://api.openweathermap.org/geo/1.0/direct';

// Helper function to get coordinates
const getCoordinates = async (city) => {
  if (city) {
    // Fetch coordinates based on city name using Geocoding API
    const geocodingResponse = await fetch(`${GEOCODING_URL}?q=${city}&limit=1&appid=${API_KEY}`);
    if (!geocodingResponse.ok) {
      throw new Error('Error fetching coordinates for the provided city.');
    }
    const geocodingData = await geocodingResponse.json();
    if (geocodingData.length === 0) {
      throw new Error('City not found. Please check the city name.');
    }
    // Extract latitude and longitude
    const { lat, lon } = geocodingData[0];
    return { lat, lon };
  } else {
    // Use browser's geolocation API if city is not provided
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

// Main function to fetch weather and pollution data
export const fetchData = async (city) => {
  try {
    // Get coordinates
    const { lat, lon } = await getCoordinates(city);

    // Fetch weather data
    const weatherResponse = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    if (!weatherResponse.ok) {
      throw new Error('Error fetching weather data.');
    }
    const weatherData = await weatherResponse.json();

    // Fetch pollution data
    const pollutionResponse = await fetch(`${POLLUTION_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    if (!pollutionResponse.ok) {
      throw new Error('Error fetching pollution data.');
    }
    const pollutionData = await pollutionResponse.json();

    // Combine weather and pollution data
    return { weather: weatherData, pollution: pollutionData };
  } catch (error) {
    throw new Error(error.message);
  }
};
