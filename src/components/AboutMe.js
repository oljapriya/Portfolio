import React from 'react';
import author from "../images/olja.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-4">
          <img className="profile-img" src={author} alt="author..."/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
          I am currently enrolled as a student in the Michigan State University coding bootcamp learning the skills necessary to become a full stack web developer.
          <br />
          <br />
          Former coffee business owner with a passion for everything coffee.
          With a Bachelor's in Business Management, I have held leadership roles in the coffee world for over 10+ years. Experienced innovating and leading cross-functionally in production operations, wholesale international negotiations, and training exceptional talent across the globe has been a truly rewarding experience.
          <br />
          <br />
          I enjoy running, hiking, skiing, traveling and coding.
          <br />
          Always looking to connect professionally for opportunities and networking.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
