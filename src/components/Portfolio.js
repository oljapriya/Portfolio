import React from 'react'
import image1 from "../images/budget.jpg";
import image2 from "../images/Jenny.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  const openPopupbox = () => {
    const content = (
    <> 
      <img className="portfolio-image-popupbox" src={image1} alt="Budget Tracker App..."/>
      <p>Budget Tracker App</p>
      <b>GitHub:</b> <a className="hyper-link" onClick= {() => window.open ("https://cryptic-escarpment-79672.herokuapp.com")}>https://cryptic-escarpment-79672.herokuapp.com</a>

    </>

    )
    PopupboxManager.open({ content })
  }
  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: "Budget Tracker App."
    },
    fadeIn: true,
    fadeInSpeed: 800
  }


    return (
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">portfolio</h1>
          <div className="image-box-wrapper row row-cols-auto justify-content-center">
              <div className="portfolio-image-box" onClick={openPopupbox}>
              <img className="portfolio-image" src={image1} alt="Netflix Clone Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> 
            </div>
            {/* - */}
            <div className="portfolio-image-box">
              <img className="portfolio-image" src={image2} alt="City Guide Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              
            </div>
            {/* - */}
            <div className="portfolio-image-box">
              <img className="portfolio-image" src={image1} alt="Portfolio React and Material UI Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box">
              <img className="portfolio-image" src={image1} alt="Task Manager React and Redux Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          
            </div>
          </div>
        </div>
        <PopupboxContainer {...popupboxConfig} />
      </div>
  )
}

export default Portfolio;