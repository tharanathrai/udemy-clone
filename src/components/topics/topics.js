import React from "react";
import "./topics.css";

const Topics = () => {
  return (
    <section class="topics">
      <h2>Featured topics by category</h2>
      <div class="trending-topics container">
        <div class="topic-column development">
          <h3> Development </h3>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/python/">Python</a>
            <p>32,892,474 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/web-development/">
              Web Development
            </a>
            <p>10,403,111 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/machine-learning/">
              Machine Learning
            </a>
            <p>6,494,281 students</p>
          </div>
        </div>
        <div class="topic-column business">
          <h3> Business </h3>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/financial-analysis/">
              Financial Analysis
            </a>
            <p>1,122,733 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/sql/">SQL</a>
            <p>5,129,815 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/pmp/">PMP</a>
            <p>1,542,209 students</p>
          </div>
        </div>
        <div class="topic-column it">
          <h3> IT and Software </h3>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/aws-certification/">
              AWS Certification
            </a>
            <p>4,999,018 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/ethical-hacking/">
              Ethical Hacking
            </a>
            <p>10,112,463 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/cyber-security/">
              Cyber Security
            </a>
            <p>3,642,131 students</p>
          </div>
        </div>
        <div class="topic-column design">
          <h3> Design </h3>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/photoshop/">Photoshop</a>
            <p>10,339,186 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/graphic-design/">
              Graphic Design
            </a>
            <p>3,164,569 students</p>
          </div>
          <div class="topic-row">
            <a href="https://www.udemy.com/topic/drawing/">Drawing</a>
            <p>2,296,046 students</p>
          </div>
        </div>
      </div>
      <button type="button">Explore more topics</button>
    </section>
  );
};

export default Topics;
