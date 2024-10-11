import { useEffect, useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from './WeatherInfo';

const WeatherApp = () => {
    const flask_vercel = 'https://flask-weather-app-backend.vercel.app'
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        });
    }, []);

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (location.latitude && location.longitude) {
                try {
                    const response = await axios.get(`${flask_vercel}/weather`, {
                        params: {
                            lat: location.latitude,
                            lon: location.longitude,
                        },
                    });
                    setWeatherData(response.data);
                } catch (error) {
                    console.error("Error fetching data", error);
                }
            }
        };

        fetchWeatherData();
        const interval = setInterval(fetchWeatherData, 60000);
        return () => clearInterval(interval);
    }, [location]);

    return (
        <WeatherInfo weatherData={weatherData} />
    );
};

export default WeatherApp;
