import React from "react";
import { Icon } from "@iconify/react";
import "./HomeButtons.css";

function HomeButtons({ iconName, title }) {
  return (
    <div className="main-homebutton">
      <Icon className="Icon" icon={iconName} />
      <p className="button-title">{title}</p>
    </div>
  );
}

export default HomeButtons;
