import React, { useState, useEffect } from "react";
import WeatherCards from "../WeatherCards/WeatherCards";
import "./Weather..css";

function Weather() {
  const [icon, setIcon] = useState("10d");
  const [temp, setTemp] = useState("27");
  const [Monday, setMonday] = useState([]);
  // getDay() function returns a value of 0 - 6 representing the day of the week (0 = Sunday 6 = Saturday)
  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=1a1a53ffdffb4a6940e1c179d178a70a`
      );
      const data = await res.json();
      console.log(data);

      // look over list of returned data
      // convert date string to day of the week
      // organise data by day of the week
      // get highest/lowest temperature for each day

      // adds the day of the week to the returned data object
      const UpdatedDataList = data.list.map((object) => {
        const date = new Date(`${object.dt_txt}`);
        const day = days[`${date.getDay()}`];
        return { ...object, day: day };
      });

      setMonday(UpdatedDataList.filter((obj) => obj.day === "Monday"));

      console.log("Updated List: ", UpdatedDataList);

      let icon = data.list[0].weather[0].icon;
      // removes decimal points from temperature
      let temp = String(Math.trunc(data.list[0].main.temp));
      setIcon(icon);
      setTemp(temp);
    }
    getData();
  }, []);

  return (
    <div className="Weather">
      <h1> Weather Forecast</h1>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Current Weather"
      />
      <p>{`${temp}\u00B0`}</p>
      <ul>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
      </ul>
      <WeatherCards title="Humidity" data />
      <WeatherCards title="Wind" data />
      <WeatherCards title="Sunrise" data />
      <WeatherCards title="Sunset" data />
    </div>
  );
}

export default Weather;
