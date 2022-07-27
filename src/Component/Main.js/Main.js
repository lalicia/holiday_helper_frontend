import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeButtons from "../HomeButtons/HomeButtons";

const suitcase = "ep:suitcase";
const thermometer = "carbon:temperature-hot";
const euro = "ic:baseline-euro-symbol";
const telephone = "bi:telephone";

function Main() {
  return (
    // Navbar
    <>
      <HomeBanner />
      {/* <SearchBar/> */}
      <HomeButtons iconName={suitcase} title="Packing List" />
      <HomeButtons iconName={thermometer} title="Weather Forecast" />
      <HomeButtons iconName={euro} title="Exchange Rates" />
      <HomeButtons iconName={telephone} title="Emergency Contact" />
    </>
    // Footer
  );
}

export default Main;
