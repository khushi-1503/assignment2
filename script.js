function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=8da225f4107ffbb8a4c63062b24b7886`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Failed to fetch weather data. Please try again later.`);
          }
          return response.json();
      })
      .then(data => {
         
          const weatherIcon = document.querySelector('.weather-icon img');
          weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

          
          const temperatureElement = document.querySelector('.temperature');
          const descriptionElement = document.querySelector('.description');
          const locationElement = document.querySelector('.location');

          temperatureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`; 
          descriptionElement.textContent = data.weather[0].description;
          locationElement.textContent = data.name;

          
          const creditsElement = document.querySelector('.credits p');
          creditsElement.textContent = 'Powered by OpenWeather';
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}

window.onload = () => {
  getWeather();
}
