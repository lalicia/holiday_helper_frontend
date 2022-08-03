import { useEffect, useState } from "react";
import Countries from "./Countries";

import { DummyData } from "../DummyData";


export default function Emergency() {
  const [country, setCountry] = useState("Select country");
  const [emergencyData, setEmergencyData] = useState()

  useEffect(() => {
    async function getEmergencyData() {
      const response = await fetch("http://localhost:3001/emergency");

      let data = await response.json();
      setEmergencyData(data);

  }
  getEmergencyData();
}, []);

console.log(emergencyData)

  const handleOnChange = (e) => {
      setCountry(e.target.value);
      console.log(e.target.value)
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // const renderResult = () => {
  //   let result;
  //   country === "select country"
  //     ? (result = "select country")
  //     : (result = makeFirstLetterCapital(country));
  //   return result;
  // };
  if (emergencyData){
  return (
    <div className="container mt-3">
      <div>
        <h1>{`${country == "Select country" ? "Select Country" : country}`}</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={country} onChange={handleOnChange}>
        <option value="Select country">Select country</option>
        {emergencyData.payload.map((obj) => {
            return <option value={obj.country}>{obj.country}</option>
          })}
        </select>
      </div>
      {country !== "Select country" && <Countries country={country} emergencyData={emergencyData} />}
      
    </div>
  )} else {
    return (
      <p> Data not found... </p>
        );
  }
}
