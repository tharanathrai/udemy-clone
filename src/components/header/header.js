import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav class="header-section">
        <a href="/" class="header-logo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
            width="91"
            height="34"
          />
        </a>
        <nav class="course-categories">
          <a href="/" class="category-popover">
            Categories
          </a>
        </nav>
        <div class="search-bar">
          <form action="/courses/search/" class="course-search-form">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/explore+find+magnifier+search+icon-1320185008030646474.png"
              width="16px"
            />
            <input
              type="text"
              name="q"
              placeholder="Search for anything"
              autoComplete="off"
              role="combobox"
              aria-autocomplete="both"
              aria-haspopup="true"
              aria-expanded="false"
            />
          </form>
        </div>

        <div class="header-business">
          <a href="https://business.udemy.com/request-demo/">Udemy Business</a>
        </div>

        <div class="header-instructor">
          <a href="https://www.udemy.com/teaching/?ref=teach_header">
            Teach on Udemy
          </a>
        </div>

        <div class="header-cart">
          <button type="submit" disabled="" tabIndex="-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              width="30px"
            />
          </button>
        </div>

        <div class="header-login">
          <button type="button">Log in</button>
        </div>

        <div class="header-signup">
          <button type="button">Sign up</button>
        </div>

        <div class="header-language">
          <img src="https://cdn3.iconfinder.com/data/icons/ui-thick-outline-3-of-5/100/ui_06_of_9-19-512.png" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
