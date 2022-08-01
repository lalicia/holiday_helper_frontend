import React from "react";

/* Cross Icon SVG*/
function CrossIcon({ height, width, className, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      className={className}
      onClick={onClick}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#ffdd4a" />
          <stop offset="95%" stopColor="#fe9000" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url('#gradient')"
        strokeLinecap="round"
        strokeWidth="2"
        d="M20 20L4 4m16 0L4 20"
      />
    </svg>
  );
}

/* Hamburger Icon SVG*/
function HamburgerIcon({ height, width, className, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
      height={height}
      width={width}
      className={className}
      onClick={onClick}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#ffdd4a" />
          <stop offset="95%" stopColor="#fe9000" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url('#gradient')"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
      />
    </svg>
  );
}

/* if icon prop is hamburger then displays hamburger SVG, if prop is cross, displays cross SVG. Returns components above. */
function NavbarIcon({ icon, height, width, className, onClick }) {
  return icon === "hamburger" ? (
    <HamburgerIcon height={height} width={width} className={className} onClick={onClick} />
  ) : (
    <CrossIcon height={height} width={width} className={className} onClick={onClick} />
  );
}
export default NavbarIcon;
