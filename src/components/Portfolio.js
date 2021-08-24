import React from 'react'
import image1 from "../images/budget.jpg";
import image2 from "../images/Jenny.png";
import image3 from "../images/notes.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  //budget
  const openPopupboxBudget = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={image1} alt="Budget Tracker App..." />
        <p>Budget Tracker App</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://cryptic-escarpment-79672.herokuapp.com")}>https://cryptic-escarpment-79672.herokuapp.com</a>

      </>

    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: popupboxConfigBudget,
    });
  }
  const popupboxConfigBudget = {
    titleBar: {
      enable: true,
      text: "Budget Tracker App."
    },
    fadeIn: true,
    fadeInSpeed: 800
  }

  const popupboxConfigFitness = {
    titleBar: {
      enable: true,
      text: "Fitness Tracker App."
    },
    fadeIn: true,
    fadeInSpeed: 800
  }
  //*********************Fitness***************
  const openPopupboxFitness = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={image2} alt="Fitness Tracker App..." />
        <p>Fitness Tracker App</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://workouttracker09.herokuapp.com/?id=6115aa1b76e4b40015bfe6df")}>https://workouttracker09.herokuapp.com/?id=6115aa1b76e4b40015bfe6df</a>

      </>

    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: popupboxConfigFitness,
    });
  }

  const popupboxConfigNotes = {
    titleBar: {
      enable: true,
      text: "Note Taker App"
    },
    fadeIn: true,
    fadeInSpeed: 800
  }

  //****************Note Taker*************
  const openPopupboxNotes = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={image3} alt="Note Taker App..." />
        <p>Note Taker App</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://notetaker1111111111.herokuapp.com/")}>https://notetaker1111111111.herokuapp.com/</a>

      </>

    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: popupboxConfigNotes
    });
  }




  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-4">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxBudget}>
            <img className="portfolio-image" src={image1} alt="Budget Tracker..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFitness}>
            <img className="portfolio-image" src={image2} alt="Fitness Tracker..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxNotes}>
            <img className="portfolio-image" src={image3} alt="Note Taker..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          {/* <div className="portfolio-image-box">
              <img className="portfolio-image" src={image1} alt="Task Manager React and Redux Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div> */}

        </div>
      </div>
      <PopupboxContainer {...popupboxConfigBudget} />
      <PopupboxContainer {...popupboxConfigFitness} />
      <PopupboxContainer {...popupboxConfigNotes} />
    </div>
  )
}

export default Portfolio;