import React from "react";

import icon7 from "../../img/icon7.png";
import icon8 from "../../img/icon8.png";
import vector from "../../img/vector.png";

import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-div-one">
          <a href="#">
            <img src={icon7} alt="button"></img>
          </a>
          <div>
            <a href="#">Logout</a>
          </div>
        </div>
        <div className="footer-div-two">
          <div className="footer-div-two-box-one">
            <a href="#">
              <img src={icon8} alt="button"></img>
            </a>
            <a href="#">
              <div>Light mode</div>
            </a>
          </div>
          <div className="footer-div-two-btn">
            <img src={vector} alt="button"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
