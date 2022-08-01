import React from "react";

function WeatherCards({ title, data, unit }) {
  return (
    <div className="weather-card">
      <p>{title}</p>
      <h3>{`${data}${unit}`}</h3>
    </div>
  );
}

export default WeatherCards;
