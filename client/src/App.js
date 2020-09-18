import React, { useState, useEffect } from "react";
import Main from "./Components/Main/Main";
import Forecast from "./Components/Forecast/Forecast";
import "./App.css";
import Description from "./Components/Description/Description";

export default function App() {
  const [click, setClick] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latt = position.coords.latitude;
      const long = position.coords.longitude;
      fetch(`http://localhost:3001/weather/${latt},${long}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    });
  }, []);

  function clicked(event) {
    event.target.style.display = "none";
    setClick(true);
  }

  return (
    <div className="App">
      <Main />
      {click ? <Forecast data={data} /> : <Description />}
      <button className="Button" onClick={clicked}>
        Get weather forecast
      </button>
    </div>
  );
}
