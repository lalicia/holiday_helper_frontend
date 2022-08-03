// import { DummyData } from "../DummyData";


function Countries({ country, emergencyData }) {

const filteredData = emergencyData.payload.filter((obj) => {
  return obj.country === country
})
const countryObj = filteredData[0]

if (countryObj) {
        return (
            <>
            <strong>{country}</strong>
                {/* use ternary oprator instead of nullishcoalescing operator (??) becouse browser support is better */}
                
                <p>{`fire: ${countryObj.fire ? countryObj.fire : "---"}`}</p>
                

                <p>{`police: ${countryObj.police ? countryObj.police : "---"}`}</p>

                <p>{`ambulance: ${countryObj.ambulance ? countryObj.ambulance : "---"}`}</p>

                <p>{`embassy: ${countryObj.embassy? countryObj.embassy : "---"}`}</p>
              </>)
  }
    else {
        return (
        <p> Data not found... </p>
     );
  }
   

};

export default Countries;
