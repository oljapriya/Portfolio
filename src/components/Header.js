import React from "react";
import Typed from "react-typed";



const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <Typed
         className="typed-text"
         strings={["Olja", "Priyakovich"]}
         typeSpeed={70}
         backSpeed={60}
         loop
         />
         {/* <a href="#" className="btn-main-offer">contact me</a> */}
      </div>
    </div>     
  )
}

export default Header;
