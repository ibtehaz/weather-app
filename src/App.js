import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [allData, setAllData] = useState({
    city: "",
    country: "",
    temp: "",
    minTemp: "",
    humidity: "",
    weatherIcon: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (city) => {
    const api_key = "b55547b292b3f8ba9ec9370d2107d604";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    setAllData({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      minTemp: data.main.temp_min,
      humidity: data.main.humidity,
      weatherIcon: data.weather[0].icon,
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(search);
  };

  return (
    <main>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            type="text"
            name="city"
            placeholder="Location"
            onChange={handleChange}
          />
          <button for="city">Search</button>
        </form>
        <section>
          <div className="header-div">
            <div>
              <div className="data">
                <img
                  src={
                    "https://openweathermap.org/img/wn/" +
                    allData.weatherIcon +
                    "@2x.png"
                  }
                />

                <h1 className="title">{allData.city}</h1>
                <h2 className="location">{allData.country}</h2>

                <div className="weather-description">
                  <div>
                    <h3>HUMIDITY</h3>
                    <p>{allData.humidity}%</p>
                  </div>
                  <div>
                    <h3>TEMPERATURE</h3>
                    <p>{allData.temperature}°F</p>
                  </div>
                  <div>
                    <h3>MIN TEMPERATURE</h3>
                    <p>{allData.minTemperature}°F</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// const fetchData = async (city) => {
//   const API_KEY = "b55547b292b3f8ba9ec9370d2107d604";
//   const result = await axios.get(
//     `http://api.openweathermap.org/data/2.5/weather?q=${"milan"}&appid=${API_KEY}`
//   );
//   await setAllData({
//     city: result.data.name,
//     country: result.data.sys.country,
//     temp: result.data.main.temp,
//   });
// };

export default App;
