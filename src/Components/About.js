import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
       <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
       </div>
       <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
       </div>
       <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
             Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text">
             Eating a healthy, balanced diet is an important part of maintaining good health, and can help you feel your best.
          </p>
          <p className="primary-text">
             This means eating a wide variety of foods in the right proportions, and consuming the right amount of food and drink to achieve and maintain a healthy body weight.
          </p>
         <div className="about-buttons-container">
             <button className="secondary-button">Learn More</button>
             <button className="watch-video-button">
                 <BsFillPlayCircleFill /> Watch Video
             </button>
         </div>
     </div>
  </div>
  );
};

export default About;