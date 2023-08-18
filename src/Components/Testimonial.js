import React from 'react';
/* import ProfilePic from "../Assets/john-doe-image.png"; */
 import ProfilePic from "../Assets/sathiyaseelan-image.png"; 

import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
          <p className="primary-subheading">Testimonial</p>
          <h1 className="primary-heading">What They Are Saying</h1>
          <p className="primary-text">
              Deliciousness,Simplicity,Flexibility,Stress-free and No waste
         </p>
      </div>
      <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
              Congratulations! Very impressed with your delivery. Thank you so much. It's a boon for people like us who miss authentic food with which we have grown up.
          </p>
         <div className="testimonials-stars-container">
             <AiFillStar />
             <AiFillStar />
             <AiFillStar />
             <AiFillStar />
             <AiFillStar />
         </div>
         <h2>Sathiyaseelan</h2>
      </div>
  </div>
  );
};

export default Testimonial;