import React, {useState} from "react";

export default function Forecast() {
  const [latt, setLatt] = useState("");
  const [long, setLong] = useState("");

  navigator.geolocation.getCurrentPosition(function (position) {
    setLatt(position.coords.latitude);
    setLong(position.coords.longitude);
  });
  
  fetch(`http://localhost:3001/weather/${latt},${long}`)
    .then((res) => res.json())
    .then((data) => data);
}