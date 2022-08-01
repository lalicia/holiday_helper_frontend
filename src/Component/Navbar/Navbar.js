import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
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

    // if our showMenu state is true (visible) then set it to false
    setShowMenu(showMenu === true ? false : true);

    // <Link to="/"> becomes <a href="/"> so we grab the "href" attribute value
    // and manually redirect to the link set in "to=" after we have closed the menu
    nav(e.target.getAttribute("href"));
  };

  return (
    <nav className={classMenu}>
      <ul>
        <li>
          <Link className={classLink} onClick={onClickLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={classLink} onClick={onClickLink} to="/packing-list">
            Packing List
          </Link>
        </li>
        <li>
          <Link className={classLink} onClick={onClickLink} to="/weather">
            Weather Forecast
          </Link>
        </li>
        <li>
          <Link className={classLink} onClick={onClickLink} to="/exchange">
            Exchange Rates
          </Link>
        </li>
        <li>
          <Link className={classLink} onClick={onClickLink} to="/contacts">
            Emergency Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/* Changed Icon for NavbarIcon component that I made with SVG for icon*/
/* Made two new classes - header shadow and no shadow. Control if shadow shows or not */
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
        <div className="logo">
          <img className="logo-image" src={Logo} alt="Logo" />
        </div>
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
