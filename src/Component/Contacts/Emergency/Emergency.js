import { useEffect, useState } from "react";
import AZDirectory from "../AZDirectory/AZDirectory";
import Countries from "./Countries";
import "../Contacts.css";

export default function Emergency() {
  const [country, setCountry] = useState("Select country");
  const [emergencyData, setEmergencyData] = useState();

  useEffect(() => {
    async function getEmergencyData() {
      const response = await fetch(
        "https://holiday-helper.herokuapp.com/emergency/asc"
      );

      let data = await response.json();
      setEmergencyData(data);
    }
    getEmergencyData();
  }, []);

  console.log(emergencyData);

  const handleOnChange = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (emergencyData) {
    return (
      <div className="emergency-component-div">
        <div className="form-select-div">
          <select
            className="form-select"
            value={country}
            onChange={handleOnChange}
          >
            <option value="Select country">Select country</option>
            {emergencyData.payload.map((obj) => {
              return <option value={obj.country}>{obj.country}</option>;
            })}
          </select>
        </div>
        <h2 className="country-title">{`${
          country == "Select country" ? "" : makeFirstLetterCapital(country)
        }`}</h2>

        {country !== "Select country" && (
          <Countries country={country} emergencyData={emergencyData} />
        )}
        <AZDirectory emergencyData={emergencyData} />
      </div>
    );
  } else {
    return <p> Data not found... </p>;
  }
}
