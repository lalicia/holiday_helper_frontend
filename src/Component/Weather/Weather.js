import React, { useState } from "react";
import "./Weather..css";

function Weather() {
  const [icon, setIcon] = useState("10d");
  const [temp, setTemp] = useState("27");

  async function getData() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=1a1a53ffdffb4a6940e1c179d178a70a`
    );
    const data = await res.json();
    console.log(data);
    let icon = data.list[0].weather[0].icon;
    let temp = String(Math.trunc(data.list[0].main.temp - 273.15));
    setIcon(icon);
    setTemp(temp);
  }
  getData();

  return (
    <div className="Weather">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Current Weather"
      />
      <p>{`${temp}\u00B0`}</p>
    </div>
  );
}

export default Weather;
