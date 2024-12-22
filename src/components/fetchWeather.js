const API_KEY = '80738e0fd9d0f1636258b4ac4bdf2ff3'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  if (city) {
      // Fetch weather data based on city name
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
      if (!response.ok) {
          throw new Error('Error fetching weather data for the provided city.');
      }
      return await response.json();
  } else {
      // Fetch weather data based on current location
      return new Promise((resolve, reject) => {
          if (!navigator.geolocation) {
              reject(new Error('Geolocation is not supported by your browser.'));
          }
          
          navigator.geolocation.getCurrentPosition(
              async (position) => {
                  const { latitude, longitude } = position.coords;
                  const response = await fetch(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
                  if (!response.ok) {
                      reject(new Error('Error fetching weather data for your current location.'));
                  }
                  resolve(await response.json());
              },
              (error) => {
                  reject(new Error('Unable to retrieve your location.'));
              }
          );
      });
  }
}

