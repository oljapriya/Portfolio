import React from "react";
import Typed from "react-typed";



const Header = () => {
  return (
    <div id="home" className="header-wraper">
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
