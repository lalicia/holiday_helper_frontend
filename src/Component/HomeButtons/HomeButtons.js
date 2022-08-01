import React from "react";
import { Icon } from "@iconify/react";
import "./HomeButtons.css";
import { Link } from "react-router-dom";

function HomeButtons({ iconName, title, path }) {
  return (
    <Link to={path} className="main-homebutton">
      <Icon className="Icon" icon={iconName} />
      <p className="button-title">{title}</p>
    </Link>
  );
}

export default HomeButtons;
