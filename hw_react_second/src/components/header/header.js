import React from "react";

import "./header.css"

import avatar from "../../img/avatar.png"
import chevron from "../../img/chevron.png";
import chevron2 from "../../img/chevron2.png";

const Header = () => { 
    return (
      <>
        <div className="header">
          <div className="header-img">
            <img src={avatar} alt="button"></img>
          </div>
          <div className="header-content">
            <div className="header-content-title">AnimatedFred</div>
            <a href="#">
              <div className="header-content-gmail">animated@demo.com</div>
            </a>
          </div>
          <div className="header-img-chevrone-one">
            <img src={chevron} alt="button"></img>
          </div>
          <div className="header-img-chevrone-two">
            <img src={chevron2} alt="button"></img>
          </div>
        </div>
      </>
    );
}

export default Header;