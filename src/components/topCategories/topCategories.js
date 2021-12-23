import React from "react";
import design from "/Users/tharanath/udemy-project/src/img/design.jpeg";
import development from "/Users/tharanath/udemy-project/src/img/development.jpeg";
import marketing from "/Users/tharanath/udemy-project/src/img/marketing.jpeg";
import it from "/Users/tharanath/udemy-project/src/img/it.jpeg";
import personal from "/Users/tharanath/udemy-project/src/img/personal.jpeg";
import business from "/Users/tharanath/udemy-project/src/img/business.jpeg";
import photography from "/Users/tharanath/udemy-project/src/img/photography.jpeg";
import music from "/Users/tharanath/udemy-project/src/img/music.jpeg";
import "./topCategories.css";

const TopCategories = () => {
  return (
    <section class="categories">
      <h2>Top Categories</h2>
      <div class="categories-container">
        <div class="category-row">
          <div class="category-column design">
            <a href="https://www.udemy.com/courses/design/">
              <img
                src={design}
                height="300"
                width="300"
                alt="Abstract collection of shapes"
              />
            </a>
            <h4>Design</h4>
          </div>
          <div class="category-column development">
            <a href="https://www.udemy.com/courses/development/">
              <img
                src={development}
                height="300"
                width="300"
                alt="Cartoon monitor standing up"
              />
            </a>
            <h4>Development</h4>
          </div>
          <div class="category-column marketing">
            <a href="https://www.udemy.com/courses/marketing/">
              <img
                src={marketing}
                height="300"
                width="300"
                alt="Graphs and figures"
              />
            </a>
            <h4>Marketing</h4>
          </div>
          <div class="category-column it-and-software">
            <a href="https://www.udemy.com/courses/it-and-software/">
              <img
                src={it}
                height="300"
                width="300"
                alt="People changing connections on machine"
              />
            </a>
            <h4>IT and Software</h4>
          </div>
          <div class="category-row">
            <div class="category-column personal">
              <a href="https://www.udemy.com/courses/personal-development/">
                <img
                  src={personal}
                  height="300"
                  width="300"
                  alt="Happy person holding a flower and watering themselves"
                />
              </a>
              <h4>Personal Development</h4>
            </div>
            <div class="category-column business">
              <a href="https://www.udemy.com/courses/business/">
                <img
                  src={business}
                  height="300"
                  width="300"
                  alt="Person on a call"
                />
              </a>
              <h4>Business</h4>
            </div>
            <div class="category-column photography">
              <a href="https://www.udemy.com/courses/photography/">
                <img
                  src={photography}
                  height="300"
                  width="300"
                  alt="Camera clicking"
                />
              </a>
              <h4>Photography</h4>
            </div>
            <div class="category-column music">
              <a href="https://www.udemy.com/courses/music/">
                <img
                  src={music}
                  height="300"
                  width="300"
                  alt="Musical instruments"
                />
              </a>
              <h4>Music</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
