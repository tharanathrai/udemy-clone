import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Courses from "../tabbedNavigation/data.json";
import "./courseCarousel.css";

export default class CourseCarousel extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 400, itemsToShow: 2, itemsToScroll: 1 },
      { width: 770, itemsToShow: 2, itemsToScroll: 1 },
      { width: 1024, itemsToShow: 4, itemsToScroll: 1 },
    ];
  }

  render() {
    return (
      <div className="carousel-courses-section">
        <h2>Students are viewing</h2>
        <Carousel pagination={false} breakPoints={this.breakPoints}>
          {Courses.Courses.map((item) => (
            <div key={item.id} className="carousel-courses-wrapper">
              <a href={item.url}>
                <img src={item.url} height="150" width="250" />
              </a>
              <h3>{item.courseName}</h3>
              <p>{item.authorName}</p>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
