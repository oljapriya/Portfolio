import React from "react";
import Typed from "react-typed";
// import Particles from "react-particles-js"



const Header = () => {
  return (
    <div id="home" className="header-wraper">
      {/* < Particles
      params={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}
      /> */}
      <div className="main-info">
        <Typed
         className="typed-text"
         strings={["Olja", "Priyakovich"]}
         typeSpeed={70}
         backSpeed={60}
         loop
         />
      </div>
    </div>     
  )
}

export default Header;
