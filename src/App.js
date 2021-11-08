import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [allData, setAllData] = useState({
    city: "",
    country: "",
    temp: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (city) => {
    const api_key = "b55547b292b3f8ba9ec9370d2107d604";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${'london'}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    setAllData({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
    });
  };

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {allData.country}</h1>
        <h1>Hello {allData.temp}℉</h1>
      </header>
    </div>
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
