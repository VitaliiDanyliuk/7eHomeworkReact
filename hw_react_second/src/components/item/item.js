import React from "react";

import "./item.css";

const Item = ({ data }) => {
  return data.map(function ({ icon, text }, index) {
    return (
      <>
        <div className="item" key={index+1}>
          <div className="list-img">
            <a href="#">
              <img src={icon} alt={text}></img>
            </a>
          </div>
          <a href="#">
            <div className="list-title">{text}</div>
          </a>
        </div>
      </>
    );
  });
};

export default Item;
