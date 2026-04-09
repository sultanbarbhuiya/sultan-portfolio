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
    <div className="page">
      <h1>Weather</h1>

      {/* CENTERED BOX */}
      <div className="center-box">
        <input
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Check</button>

        {data && data.main && (
          <p className="weather-result">
            {data.name}: {data.main.temp}°C
          </p>
        )}
      </div>
    </div>
  );
}

export default Weather;