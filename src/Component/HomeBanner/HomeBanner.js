import React from "react";
import "./HomeBanner.css";
import Banner from'../../Assets/images/Banner1.png'

function HomeBanner() {
  return (
    <div className="HomeBanner">
      <img className="Banner"
            src={Banner} alt="Banner Image"
          />
    </div>
  );
}

export default HomeBanner;
