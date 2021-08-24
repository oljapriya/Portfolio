import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="mobile-col col-lg-4 col-md-6 col-md-6">
            <div className="d-flex">
              <p>San Francisco | 206 Caledonia Street</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">(555)555-555</a>
            </div>
            <div className="d-flex">
              <p>poljako@gmail.com</p>
            </div>
          </div>
          <div className="mobile-col col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href="#home">Home</a>
                <br/>
                <a className="footer-nav" href="#about">About me</a>
                <br/>
                <a className="footer-nav">Experience</a>
                <br/>
                <a className="footer-nav">Portfolio</a>
                <br/>
                <a className="footer-nav">Contact me</a>
                </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/oljapriyakovich/">
            <i className="fab fa-linkedin-in fa-2x"/>
            </a>
            <a href="https://github.com/oljapriya?tab=repositories">
            <i className="fab fa-github fa-2x"/>
            </a>
            <a href="https://www.instagram.com/olja_incolor/">
              <i className="fab fa-instagram fa-2x"/>
              </a>
          </div>
          <p className="text-center">
              &copy;
              {new Date().getFullYear()}&nbsp;| Olja Priyakovich
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;