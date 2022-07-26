import React from "react";
import { Icon } from "@iconify/react";
import "./HomeButtons.css";

function HomeButtons({ iconName, title }) {
  return (
    <>
      <Icon className="Icon" icon={iconName} />
      <p>{title}</p>
    </>
  );
}

export default HomeButtons;
