import React from "react";
import "./minHeader.css";

const MiniHeader = () => {
  return (
    <header>
      <nav class="mini-header-section">
        <button type="button" className="hamburger-menu">
          <img
            src="https://cdn4.iconfinder.com/data/icons/mobile-app-navigation-line-style/32/Hamburger_Menu-512.png"
            width="25px"
            height="25px"
          />
        </button>
        <a href="/" class="mini-header-logo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
            width="60"
            height="24"
          />
        </a>
        <div class="mini-header-search">
          <button type="submit" disabled="" tabIndex="-1">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/explore+find+magnifier+search+icon-1320185008030646474.png"
              width="15px"
            />
          </button>
        </div>
        <div class="mini-header-cart">
          <button type="submit" disabled="" tabIndex="-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              width="15px"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MiniHeader;
