import React from "react";
import "./WeatherCards.css";

function WeatherCards({ title, data }) {
  return (
    <>
      <p>{title}</p>
      <h3>{data}</h3>
    </>
  );
}

export default WeatherCards;
