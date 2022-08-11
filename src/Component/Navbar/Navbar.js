import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo/HHLOGO.png";
import NavbarIcon from "./icons/NavbarIcon";

function Menu({ showMenu, setShowMenu }) {
  const classMenu = `menu ${showMenu ? "menu-show" : "menu-hide"}`;
  const classLink = `menu-link ${
    showMenu ? "menu-link-show" : "menu-link-hide"
  }`;

  // control navigation in react
  const nav = useNavigate();
  const onClickLink = (e) => {
    // prevent Link from redirecting on click
    e.preventDefault();

    // if showMenu state is true (visible) then set it to false
    setShowMenu(showMenu === true ? false : true);

    nav(e.target.getAttribute("href"));
  };

  return (
    <nav className={classMenu}>
      <ul>
        <li>
          <Link id="home" className={classLink} onClick={onClickLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link id="packing" className={classLink} onClick={onClickLink} to="/packing-list">
            Packing List
          </Link>
        </li>
        <li>
          <Link id="weather" className={classLink} onClick={onClickLink} to="/weather">
            Weather Forecast
          </Link>
        </li>
        <li>
          <Link id="ex" className={classLink} onClick={onClickLink} to="/exchange">
            Exchange Rates
          </Link>
        </li>
        <li>
          <Link id="contacts" className={classLink} onClick={onClickLink} to="/contacts">
            Emergency Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const onDisplayMenu = () => setShowMenu(!showMenu);

  return (
    <div className="header">
      <div
        className={`header-content ${
          showMenu ? "header-content-no-shadow" : "header-content-shadow"
        }`}
      >
        <Link to="/" className="logo">
          <img className="logo-image" src={Logo} alt="Logo" />
        </Link>
        <div>
          <NavbarIcon
            className="menu-icon"
            height={50}
            icon={showMenu ? "cross" : "hamburger"}
            onClick={onDisplayMenu}
          />
        </div>
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}

export default Navbar;
