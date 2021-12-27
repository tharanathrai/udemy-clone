import React from "react";
import Nasdaq from "../../img/nasdaq-dark.svg";
import Volkswagen from "../../img/volkswagen-dark.svg";
import Box from "../../img/box-dark.svg";
import Netflix from "../../img/netflix-dark.svg";
import Eventbrite from "../../img/eventbrite-dark.svg";
import "./partners.css";

const Partners = () => {
  return (
    <div class="partners-container">
      <div class="partners">
        <h3>Trusted by companies of all sizes</h3>
        <a
          class="partner-logos"
          href="https://business.udemy.com/request-demo/"
        >
          <img src={Nasdaq} alt="Nasdaq" width="115" height="44"></img>
          <img src={Volkswagen} alt="Volkswagen" width="44" height="44"></img>
          <img src={Box} alt="Box" width="67" height="44"></img>
          <img src={Netflix} alt="Netflix" width="101" height="44"></img>
          <img src={Eventbrite} alt="Eventbrite" width="115" height="44"></img>
        </a>
      </div>
    </div>
  );
};

export default Partners;
