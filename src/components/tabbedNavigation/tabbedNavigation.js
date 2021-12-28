import React, { useState } from "react";
import "./tabbedNavigation.css";
import Courses from "./data.json";

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

const TabbedNavigation = (props) => {
  const [courses, setCourse] = useState(Courses.Courses);

  function openTab(evt, topicName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(topicName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  window.onload = function () {
    document.getElementById("defaultOpen").click();
  };

  return (
    <div class="category-tab-nav-wrapper">
      <div class="tab-nav-metadata">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 183,000 online video courses with new additions published
          every month
        </p>
      </div>
      <div class="tab-nav-wrapper">
        <div class="tab">
          <button
            class="tablinks"
            id="defaultOpen"
            onClick={() => openTab(Event, "Python")}
          >
            Python
          </button>
          <button class="tablinks" onClick={() => openTab(Event, "Excel")}>
            Excel
          </button>
          <button
            class="tablinks"
            onClick={() => openTab(Event, "Web Development")}
          >
            Web Development
          </button>
          <button class="tablinks" onClick={() => openTab(Event, "JavaScript")}>
            JavaScript
          </button>
          <button
            class="tablinks"
            onClick={() => openTab(Event, "Data Science")}
          >
            Data Science
          </button>
          <button
            class="tablinks"
            onClick={() => openTab(Event, "AWS Certification")}
          >
            AWS Certification
          </button>
          <button class="tablinks" onClick={() => openTab(Event, "Drawing")}>
            Drawing
          </button>
        </div>

        <div id="Python" class="tabcontent">
          <h3>Expand your career opportunities with Python</h3>
          <p>
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to both beginners and advanced developers alike.
          </p>
          <button type="button">Explore Python</button>
          <div class="course-container">
            {courses.map((c) => {
              if (c.subject == "Python")
                return <CourseComp course={c}></CourseComp>;
            })}
          </div>
        </div>

        <div id="Excel" class="tabcontent">
          <h3>Analyze and visualize data with Excel</h3>
          <p>
            Take a Microsoft Excel course from Udemy, and learn how to use this
            industry-standard software. Real-world experts will show you the
            basics like how to organize data into sheets, rows and columns, and
            advanced techniques like creating complex dynamic formulas. Both
            small businesses and large companies use Excel to turn their raw
            data into actionable insights.
          </p>
          <button type="button">Explore Excel</button>
          <div class="course-container">
            {courses.map((c) => {
              if (c.subject == "Excel")
                return <CourseComp course={c}></CourseComp>;
            })}
          </div>
        </div>

        <div id="JavaScript" class="tabcontent">
          <h3>Grow your software development skills with JavaScript</h3>
          <p>
            JavaScript is a text-based computer programming language used to
            make dynamic web pages. A must-learn for aspiring web developers or
            programmers, JavaScript can be used for features like image
            carousels, displaying countdowns and timers, and playing media on a
            webpage. With JavaScript online classes, you can learn to build
            interactive web applications, choose the best framework, and work
            with other programming languages like HTML and CSS.
          </p>
          <button type="button">Explore JavaScript</button>
          <div class="course-container">
            {courses.map((c) => {
              if (c.subject == "JavaScript")
                return <CourseComp course={c}></CourseComp>;
            })}
          </div>
        </div>

        <div id="Web Development" class="tabcontent">
          <h3>Build websites and applications with Web Development</h3>
          <p>
            The world of web development is as wide as the internet itself. Much
            of our social and vocational lives play out on the internet, which
            prompts new industries aimed at creating, managing, and debugging
            the websites and applications that we increasingly rely on.
          </p>
          <button type="button">Explore Web Development</button>
          <div class="course-container">
            {courses.map((c) => {
              if (c.subject == "Web Development")
                return <CourseComp course={c}></CourseComp>;
            })}
          </div>
        </div>

        <div id="Data Science" class="tabcontent">
          <h3>Lead data-driven decisions with Data Science</h3>
          <p>
            Data science application is an in-demand skill in many industries
            worldwide — including finance, transportation, education,
            manufacturing, human resources, and banking. Explore data science
            courses with Python, statistics, machine learning, and more to grow
            your knowledge. Get data science training if you’re into research,
            statistics, and analytics.
          </p>
          <button type="button">Explore Data Science</button>
          <div class="course-container">
            {courses.map((c) => {
              if (c.subject == "Data Science")
                return <CourseComp course={c}></CourseComp>;
            })}
          </div>
        </div>

        <div id="AWS Certification" class="tabcontent">
          <h3>Become an expert in cloud computing with AWS Certification</h3>
          <p>
            Prep for your AWS certification with an AWS course on Udemy. Learn
            the fundamentals of AWS such as working with a serverless platform,
            the various frameworks, security and more. With these courses,
            you’ll build the valuable skills you need to implement cloud
            initiatives — and open up new career opportunities. If you want to
            become an AWS developer, we’ve got the course for you.
          </p>
          <button type="button">Explore AWS Certification</button>
          <div class="course-container">
            {courses.map((c) => {
              if (c.subject == "AWS Certification")
                return <CourseComp course={c}></CourseComp>;
            })}
          </div>
        </div>

        <div id="Drawing" class="tabcontent">
          <h3>Expand your creative skillset with Drawing</h3>
          <p>
            Want to start drawing for fun or take your craft to the next level?
            Explore our online drawing classes and learn pencil drawing, figure
            drawing, cartoon drawing, character drawing for cartoons and anime,
            illustration, sketching, shading and more. Take an overview course
            on the fundamentals of drawing or zero in on an area you’d like to
            improve with a specialized course. We’ve got tons of options to get
            — and keep — you going.
          </p>
          <button type="button">Explore Drawing</button>
          <div class="course-container">
            {courses.map((c) => {
              if (c.subject == "Drawing")
                return <CourseComp course={c}></CourseComp>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedNavigation;
