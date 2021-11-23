import React from "react";
import axios from "axios";

export default function Weather() {
  function showTemperature(response) {
    alert(`it is ${response.data.main.temp} in ${city}`);
  }

  let city = "Noosa";
  let apiKey = "456a5de287faeb02ba871a9c7698e2c6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  return <h2> Axios</h2>;
}
