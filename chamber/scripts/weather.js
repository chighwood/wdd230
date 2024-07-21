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

        const temp = currentWeather.main.temp;
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

        // Process 3-day forecast (next 3 days after the current day, 24-hour interval)
        let dayCount = 0;
        for (let i = 8; i < data.list.length; i += 8) {
            if (dayCount === 3) break;

            const forecast = data.list[i];
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString(undefined, { weekday: 'long' });
            const forecastTemp = forecast.main.temp;
            const forecastDesc = capitalizeWords(forecast.weather[0].description);
            const forecastIconCode = forecast.weather[0].icon;
            const forecastIconUrl = `http://openweathermap.org/img/wn/${forecastIconCode}@2x.png`;

            const forecastElement = document.createElement('div');
            forecastElement.innerHTML = `
                <div>
                    <h3>${day}</h3>
                    <img src="${forecastIconUrl}" alt="${forecastDesc}">
                    <p>${forecastTemp}°F - ${forecastDesc}</p>
                </div>
            `;
            forecastContainer.appendChild(forecastElement);

            dayCount++;
        }
    })
    .catch(error => console.error('Error fetching the weather data:', error));
