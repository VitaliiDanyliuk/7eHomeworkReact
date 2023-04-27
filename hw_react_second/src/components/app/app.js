import React from "react";
import Header from "../header/header";
import Item from "../item/item";
import data from "../../data/data";
import Footer from "../footer/footer";

import "./app.css"



const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Item data={data}></Item>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
