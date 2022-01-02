import React, { useState } from "react";
import Courses from "../tabbedNavigation/data.json";
import "./alsoLearning.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CourseComp = (props) => {
  return (
    <div className="course-wrapper">
      <a href={props.course.url}>
        <img src={props.course.url} height="150px" width="250px" />
      </a>
      <div className="course-description">
        <h3>{props.course.courseName}</h3>
        <p>{props.course.authorName}</p>
      </div>
    </div>
  );
};

const AlsoLearning = (props) => {
  const [courses, setCourse] = useState(Courses.Courses);

  return (
    <div class="also-learning-section">
      <h3>Students are viewing</h3>
      <div class="course-container">
        {courses.map((c) => {
          if (c.subject != "Python")
            return <CourseComp course={c}></CourseComp>;
        })}
      </div>
    </div>
  );
};

export default AlsoLearning;
