
import { DummyData } from "../DummyData";


function Countries({ country }) {
    if (DummyData[country]) {
        return (
            <>
            <strong>{country}</strong>
                {/* use ternary oprator instead of nullishcoalescing operator (??) becouse browser support is better */}
                
                <p>{`fire: ${DummyData[country].fire ? DummyData[country].fire : "---"}`}</p>
                

                <p>{`police: ${DummyData[country].police ? DummyData[country].police : "---"}`}</p>

                <p>{`ambulance: ${DummyData[country].ambulance ? DummyData[country].ambulance : "---"}`}</p>

                <p>{`embassy: ${DummyData[country].embassy? DummyData[country].embassy : "---"}`}</p>
              </>)
  }
    else {
        return (
        <p> Data not found... </p>
    );
  }
    

};

export default Countries;
