import React from "react";
import "./changeLife.css";

const ChangeLife = () => {
  return (
    <div class="change-life-cta-wrapper">
      <div class="change-life-cta image">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/transform-2x-v3.jpg"
          srcset="https://s.udemycdn.com/home/non-student-cta/transform-2x-v3.jpg 1x, https://s.udemycdn.com/home/non-student-cta/transform-2x-v3.jpg 2x"
          class="change-life-cta-image"
          alt=""
          width="400"
          height="400"
        ></img>
      </div>
      <div class="change-life-cta content">
        <h3>Transform your life through education</h3>
        <p>
          Learners around the world are launching new careers, advancing in
          their fields, and enriching their lives.
        </p>
        <button type="button">Find out how</button>
      </div>
    </div>
  );
};

export default ChangeLife;
