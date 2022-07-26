import React from "react";
import { Icon } from "@iconify/react";
import "./HomeButtons.css";

function HomeButtons({ iconName, title }) {
  return (
    <>
      <Icon icon={iconName} />
      <p>{title}</p>
    </>
  );
}

export default HomeButtons;
