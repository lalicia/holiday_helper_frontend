import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeButtons from "../HomeButtons/HomeButtons";
import temperature from '../../Assets/images/temperature-hot.png'
import './Main.css'

const suitcase = "ep:suitcase";
const thermometer = "carbon:temperature-hot";
const euro = "ic:baseline-euro-symbol";
const telephone = "bi:telephone";

function Main() {
  return (

    <div className="main-container">
      <div className="homebanner">
        <HomeBanner />
      </div>
      <div className="homebuttons">
        {/* <SearchBar/> */}
        <div className="homebuttons1">
          <HomeButtons iconName={suitcase} title="Packing List" />
          <HomeButtons iconName={euro} title="Exchange Rates" />
          
        </div>
        <div className="homebuttons2">
          <HomeButtons iconName={thermometer} title="Weather Forecast" />
          <HomeButtons iconName={telephone} title="Emergency Contact" />
        </div>
      </div>
    </div>

  );
}

export default Main;
