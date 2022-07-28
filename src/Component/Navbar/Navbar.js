import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from '../../Assets/Logo/HHLOGO.png'

function Menu({ show }) {
  const classMenu = `menu ${show ? "menu-show" : "menu-hide"}`;
  const classLink = `menu-link ${show ? "menu-link-show" : "menu-link-hide"}`;

  return (

    <nav className={classMenu}>
      <ul>
        <li>
          <Link className={classLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={classLink} to="/packing-list">
            Packing List
          </Link>
        </li>
        <li>
          <Link className={classLink} to="/weather">
            Weather Forecast
          </Link>
        </li>
        <li>
          <Link className={classLink} to="/exchange">
            Exchange Rates
          </Link>
        </li>
        <li>
          <Link className={classLink} to="/contacts">
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
      <div className="header-content">
        <div className="logo">
          <img className="logo-image"
            src={Logo} alt="Logo"
          />
        </div>
        <div>
          <Icon
            className="menu-icon"
            height={50}
            icon={showMenu ? "akar-icons:cross" : "charm:menu-hamburger"}
            onClick={onDisplayMenu}
          />
        </div>
      </div>
      <Menu show={showMenu} />
    </div>
  );
}

export default Navbar;
