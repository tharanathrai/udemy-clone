import React from "react";
import "./udemyBusiness.css";

const UdemyBusiness = () => {
  return (
    <div class="business-cta-wrapper">
      <div class="business-cta content" id="logo">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
          width="282"
          height="48"
          alt=""
        />
        <p>
          Get unlimited access to 6,000+ of Udemy’s top courses for your team.
          Learn and improve skills across business, tech, design, and more.
        </p>
        <button type="button">Get Udemy Business</button>
      </div>
      <div class="business-cta image">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/ub-2x-v3.jpg"
          srcset="https://s.udemycdn.com/home/non-student-cta/ub-2x-v3.jpg 2x, https://s.udemycdn.com/home/non-student-cta/ub-2x-v3.jpg 2x"
          class="non-student-cta-image"
          alt=""
          width="400"
          height="400"
        ></img>
      </div>
    </div>
  );
};

export default UdemyBusiness;
