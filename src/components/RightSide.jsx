import React from 'react';
import "../components/RightSide.css";
import row1 from "../assets/row1.png";
import row12 from "../assets/row12.png";
import row21 from "../assets/row21.png";
import row22 from "../assets/row22.png";
import row31 from "../assets/row31.png";
import row32 from "../assets/row32.png";
import row33 from "../assets/row33.png";

function RightSide() {
  return (
    <div className= "rightBox">
      <div className="box scroll-container">
        <img src ={row1} />
        <img src = {row12} />
        <img src = {row12} />
      </div>
  <div className="box scroll-container ">
  <img src ={row21} />
        <img src = {row22} />
        <img src = {row12} />
  </div>
  <div className="box scroll-container">

  <img src ={row31} />
        <img src = {row32} />
        <img src = {row33} />
  </div>
    </div>
  )
}

export default RightSide