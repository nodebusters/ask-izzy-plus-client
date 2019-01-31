import React from "react";

import advocacy from "../Images/banners/advocacy.png";
import atsi from "../Images/banners/atsi.png";
import atsi2 from "../Images/banners/atsi2.png";
import centrelink from "../Images/banners/centrelink.png";
import drugsAlcohol from "../Images/banners/drugs-alcohol.png";
import everydayThings from "../Images/banners/everyday-things.png";
import facilities from "../Images/banners/facilities.png";
import familyViolence from "../Images/banners/family-violence.png";
import findingWork from "../Images/banners/finding-work.png";
import food from "../Images/banners/food.png";
import health from "../Images/banners/health.png";
import homepage from "../Images/banners/homepage.png";
import housing from "../Images/banners/housing.png";
import legal from "../Images/banners/legal.png";
import lifeSkillsEducation from "../Images/banners/life-skills-education.png";
import moneyHelp from "../Images/banners/money-help.png";
import somethingToDo from "../Images/banners/something-to-do.png";
import supportCounselling from "../Images/banners/support-counselling.png";
import technology from "../Images/banners/technology.png";

import logo from "../Images/logo/ask-izzy-logo-edited.svg";

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
        <img src={header} alt="Ask Izzy Plus banner" />
      </div>
      <div className="logo-image">
        <img src={logo} alt="Ask Izzy Plus logo" />
      </div>
    </div>
  );
};

export default Banner;
