import React from 'react';
import WeatherDetails from './WeatherDetails';

const WeatherInfo = ({ weatherData }) => {
    return (
        <div className="weather-info">
            {/*<img*/}
            {/*    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDdua25tcnI0aHk5ZW9oM3R3bG9udWlpYzh6dnk0MmZneXhqcjkxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/V4ErRLRQG2lfKOjIht/giphy.webp"*/}
            {/*    alt="WeatherApp Icon" />*/}
            <div className="weather-info-content">
                <h1>TbelzBby Weather App</h1>
                {weatherData ? (
                    <WeatherDetails weatherData={weatherData} />
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </div>
    );
};

export default WeatherInfo;
