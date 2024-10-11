import React from 'react';

const WeatherDetails = ({ weatherData }) => {
    return (
        <div className="container">
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p className="temperature-details">=>Temperature:    {weatherData.main.temp} °C</p>
            {/*/!*<p className="temperature-details">Feels Like: {weatherData.main.feels_like} °C</p>*!/*/}
            {/*<p className="temperature-details">Min Temperature: {weatherData.main.temp_min} °C</p>*/}
            {/*<p className="temperature-details">Max Temperature: {weatherData.main.temp_max} °C</p>*/}
            {/*<p className="temperature-details">Pressure: {weatherData.main.pressure} hPa</p>*/}
            <p className="temperature-details">=>Humidity:    {weatherData.main.humidity}%</p>
            <p className="temperature-details">=>Weather:    {weatherData.weather[0].description}</p>
            {/*<p className="temperature-details">Wind Speed: {weatherData.wind.speed} m/s</p>*/}
            <p className="temperature-details">=>Visibility:    {weatherData.visibility / 1000} km</p>
        </div>
    );
};

export default WeatherDetails;
