import React from "react";
import "./Header.css";

function Header() {
  
  const showMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="/#" className="nav__logo">
            HỒ HUỲNH DŨNG
          </a>
        </div>
        <div className="nav__toggle" onClick={showMenu} id="nav-toggle">
          <i className="bx bx-menu" />
        </div>
        <div className="nav__menu" id="nav-menu">
          <div className="nav__close" onClick={showMenu} id="nav-close">
            <i className="bx bx-x" />
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
