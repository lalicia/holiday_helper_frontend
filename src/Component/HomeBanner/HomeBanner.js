import React from "react";
import "./HomeBanner.css";
import Banner from'../../Assets/images/BannerImageCropped.svg'

function HomeBanner() {
  return (
    <div className="HomeBanner">
      <img className="Banner"
            src={Banner} alt="Banner"
          />
    </div>
  );
}

export default HomeBanner;
