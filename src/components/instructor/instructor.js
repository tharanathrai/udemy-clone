import React from "react";
import "./instructor.css";

const Instructor = () => {
  return (
    <div class="instructor-cta-wrapper">
      <div class="instructor-cta image">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          srcset="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg 1x, https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg 2x"
          class="non-student-cta-image"
          alt=""
          width="400"
          height="400"
        ></img>
      </div>
      <div class="instructor-cta content">
        <h3>Become an instructor</h3>
        <p>
          Instructors from around the world teach millions of students on Udemy.
          We provide the tools and skills to teach what you love.
        </p>
        <button type="button">Start teaching today</button>
      </div>
    </div>
  );
};

export default Instructor;
