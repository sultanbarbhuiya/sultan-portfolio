import { useState } from "react";

function Weather() {
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);

    const getWeather = async () => {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a750e7035f048d6eb12f9b83bf348ec&units=metric`
        );
        const result = await res.json();
        setData(result);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Weather</h1>

            <input
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Check</button>

            {data && data.main && (
                <p>
                    {data.name}: {data.main.temp}°C
                </p>
            )}
        </div>
    );
}

export default Weather;