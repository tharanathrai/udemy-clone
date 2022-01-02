import React from "react";
import "./banner.css";

const ContentBanner = () => {
  return (
    <div class="billboard-container">
      <div class="billboard-image">
        <img
          alt=""
          width="1340"
          height="400"
          src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg"
        />
        <div class="billboard-content">
          <h1> Learning that gets you </h1>
          <p>Skills for your present (and your future). Get started with us.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentBanner;
