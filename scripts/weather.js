const apiKey = '69f0c9ec198f3702b457ba969bcf2b7c';
const city = 'Wimberley';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');
        const weatherIcon = document.getElementById('weather-icon');

        const temp = data.main.temp;
        const weatherDesc = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        function capitalizeWords(str) {
            return str.replace(/\b\w/g, function(char) {
                return char.toUpperCase();
            });
        }

        let capitalizedDesc = capitalizeWords(weatherDesc);        

        temperature.innerText = `Temperature: ${temp}°F - ${capitalizedDesc}`;
        weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${weatherDesc}">`;
    })
    .catch(error => console.error('Error fetching the weather data:', error));