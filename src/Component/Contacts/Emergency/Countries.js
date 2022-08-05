// import { DummyData } from "../DummyData";
import "../Contacts.css"

function Countries({ country, emergencyData }) {
  const filteredData = emergencyData.payload.filter((obj) => {
    return obj.country === country;
  });
  const countryObj = filteredData[0];

  if (countryObj) {
    return (
      <>
        {/* use ternary oprator instead of nullishcoalescing operator (??) becouse browser support is better */}

        <p className="selected-country">{`Fire: ${countryObj.fire ? countryObj.fire : "---"}`}</p>

        <p className="selected-country">{`Police: ${countryObj.police ? countryObj.police : "---"}`}</p>

        <p className="selected-country">{`Ambulance: ${
          countryObj.ambulance ? countryObj.ambulance : "---"
        }`}</p>

        <p className="selected-country">{`Embassy: ${countryObj.embassy ? countryObj.embassy : "---"}`}</p>
      </>
    );
  } else {
    return <p> Data not found... </p>;
  }
}

export default Countries;
