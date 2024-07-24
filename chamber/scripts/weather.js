const apiKey = '69f0c9ec198f3702b457ba969bcf2b7c';
const city = 'Wimberley';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const currentWeather = data.list[0];
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');
        const weatherIcon = document.getElementById('weather-icon');
        const forecastContainer = document.getElementById('forecast');

        const temp = Math.round(currentWeather.main.temp);
        const weatherDesc = currentWeather.weather[0].description;
        const iconCode = currentWeather.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        function capitalizeWords(str) {
            return str.replace(/\b\w/g, function(char) {
                return char.toUpperCase();
            });
        }

        let capitalizedDesc = capitalizeWords(weatherDesc);        

        temperature.innerText = `Temperature: ${temp}°F - ${capitalizedDesc}`;
        weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${weatherDesc}">`;

        const dailyForecasts = {};

        data.list.forEach(item => {
            const date = new Date(item.dt * 1000);
            const day = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
            if (!dailyForecasts[day]) {
                dailyForecasts[day] = [];
            }
            dailyForecasts[day].push(item);
        });

        const forecastDays = Object.keys(dailyForecasts).slice(1, 4);
        forecastDays.forEach(day => {
            const forecasts = dailyForecasts[day];
            let maxTemp = -Infinity;
            let forecastDesc = '';
            let forecastIconCode = '';

            forecasts.forEach(forecast => {
                if (forecast.main.temp > maxTemp) {
                    maxTemp = forecast.main.temp;
                    forecastDesc = forecast.weather[0].description;
                    forecastIconCode = forecast.weather[0].icon;
                }
            });

            maxTemp = Math.round(maxTemp);  

            const capitalizedDesc = capitalizeWords(forecastDesc);
            const forecastIconUrl = `http://openweathermap.org/img/wn/${forecastIconCode}@2x.png`;

            const forecastElement = document.createElement('div');
            forecastElement.innerHTML = `
                <div>
                    <h3>${day}</h3>
                    <img src="${forecastIconUrl}" alt="${capitalizedDesc}">
                    <p>${maxTemp}°F - ${capitalizedDesc}</p>
                </div>
            `;
            forecastContainer.appendChild(forecastElement);
        });
    })
    .catch(error => console.error('Error fetching the weather data:', error));
