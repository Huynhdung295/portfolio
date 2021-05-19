import React from "react";
import "./NavbarRS.css";
import dataNavbar from "./DataNavbar";
function NavbarRS() {
  
  const nav = document.getElementById("navRS-menu");

  const data = dataNavbar.map((data) => {
    return (
      <li className="navRS__item">
        <a
          href={data.navHref}
          onClick={() => {
            nav.classList.remove("show-menu");
          }}
          className="navRS__link"
        >
          <i className={data.navIcon} /> {data.navTitle}
        </a>
      </li>
    );
  });

  const toggleMenu = () => {
    nav.classList.toggle("show-menu");
  };

  return (
    <header className="l-headerRS" id="header">
      <div className="navRS bd-containerRS">
        <a href="#" className="navRS__logo">
          Huỳnh Dũng
        </a>
        <div className="navRS__menu" id="navRS-menu">
          <ul className="navRS__list">{data}</ul>
        </div>
        <div className="navRS__toggle" onClick={toggleMenu} id="navRS-toggle">
          <i className="bx bx-grid-alt navRS__icon" />
        </div>
      </div>
    </header>
  );
}

export default NavbarRS;