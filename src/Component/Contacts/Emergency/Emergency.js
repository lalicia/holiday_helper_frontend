import { useEffect, useState } from "react";
import AZDirectory from "../AZDirectory/AZDirectory";
import Countries from "./Countries";

export default function Emergency() {
  const [country, setCountry] = useState("Select country");
  const [emergencyData, setEmergencyData] = useState();

  useEffect(() => {
    async function getEmergencyData() {
      const response = await fetch(
        "https://holiday-helper.herokuapp.com/emergency"
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

  // const renderResult = () => {
  //   let result;
  //   country === "select country"
  //     ? (result = "select country")
  //     : (result = makeFirstLetterCapital(country));
  //   return result;
  // };
  if (emergencyData) {
    return (
      <div className="emergency-component-div">
        <div className="mt-4">
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
          <h1>{`${
            country == "Select country" ? "Select Country" : country
          }`}</h1>
        </div>
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
