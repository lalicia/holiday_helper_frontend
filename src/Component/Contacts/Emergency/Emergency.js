import { useEffect, useState } from "react";
import Countries from "./Countries";

import { DummyData } from "../DummyData";


export default function Emergency() {
  const [country, setCountry] = useState("Select country");

//   const [germanyContentVisible, setGermanyContentVisible] = useState(false);
//   const [unitedKingdomContentVisible, setUnitedKingdomContentVisible] = useState(false);
//   const [italyContentVisible, setItalyContentVisible] = useState(false);

//   useEffect(() => {
//     country === "Germany"
//       ? setGermanyContentVisible(true)
//       : setGermanyContentVisible(false);
//       country === "United Kingdom"
//           ? setUnitedKingdomContentVisible(true)
//           : setUnitedKingdomContentVisible(false);
//       country === "Italy"
//           ? setItalyContentVisible(true)
//           : setItalyContentVisible(false);
//   }, [country]);

  const handleOnChange = (e) => {
      setCountry(e.target.value);
      console.log(e.target.value)
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    country === "select country"
      ? (result = "select country")
      : (result = makeFirstLetterCapital(country));
    return result;
  };

  return (
    <div className="container mt-3">
      <div>
        <h1>Hello {renderResult()}</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={country} onChange={handleOnChange}>
          <option value="Select country">Select country</option>
          <option value="Germany">Germany</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Italy">Italy</option>
        </select>
      </div>
      {country !== "Select country" && <Countries country ={country} />}
      
    </div>
  );
}
