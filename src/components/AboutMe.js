import React from 'react';
import author from "../olja.jpeg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-4">
          <img className="profile-img" src={author} alt="author..."/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
          I am currently enrolled as a student in the Michigan State University coding bootcamp learning the skills necessary to be a full stack web developer.

          Former coffee business owner with a passion for everything coffee.
          With a Bachelor's in Business Management, I have held leadership roles in the coffee world for over 10+ years. Experienced innovating and leading cross-functionally in production operations, wholesale international negotiations, and training exceptional talent across the globe has been a truly rewarding experience.


          Hobbies: Enjoys running, hiking, skiing, and traveling.

          Always looking to connect professionally for opportunities and networking
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
