import React from "react";

import advocacy from "../images/banners/advocacy.png";
import atsi from "../images/banners/atsi.png";
import atsi2 from "../images/banners/atsi2.png";
import centrelink from "../images/banners/centrelink.png";
import drugsAlcohol from "../images/banners/drugs-alcohol.png";
import everydayThings from "../images/banners/everyday-things.png";
import facilities from "../images/banners/facilities.png";
import familyViolence from "../images/banners/family-violence.png";
import findingWork from "../images/banners/finding-work.png";
import food from "../images/banners/food.png";
import health from "../images/banners/health.png";
import homepage from "../images/banners/homepage.png";
import housing from "../images/banners/housing.png";
import legal from "../images/banners/legal.png";
import lifeSkillsEducation from "../images/banners/life-skills-education.png";
import moneyHelp from "../images/banners/money-help.png";
import somethingToDo from "../images/banners/something-to-do.png";
import supportCounselling from "../images/banners/support-counselling.png";
import technology from "../images/banners/technology.png";

import logo from "../images/logo/ask-izzy-plus-logo.svg";

const Banner = () => {
  const randomHeaderImages = [
    advocacy,
    atsi,
    atsi2,
    centrelink,
    drugsAlcohol,
    everydayThings,
    facilities,
    familyViolence,
    findingWork,
    food,
    health,
    homepage,
    housing,
    legal,
    lifeSkillsEducation,
    moneyHelp,
    somethingToDo,
    supportCounselling,
    technology
  ];

  const header =
    randomHeaderImages[Math.floor(Math.random() * randomHeaderImages.length)];

  return (
    <div className="image-wrapper">
      <div className="hero-image">
        <a href="/" className="root-link">
          <img src={header} alt="Ask Izzy Plus banner" />
        </a>
      </div>
      <div className="logo-image">
      <a href="/" className="root-link">
        <img src={logo} alt="Ask Izzy Plus logo" />
        <h3 className="subhead">Need to update your details?</h3>
      </a>
      </div>
    </div>
  );
};

export default Banner;
