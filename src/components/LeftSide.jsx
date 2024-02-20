import React from 'react';
import "../components/LeftSide.css";
import filterIcon from "../assets/filter.png"
import trendingIcon from "../assets/trending.png"
import sponseredIcon from "../assets/sponsered.png"
import newestIcon from "../assets/newest.png"
import heartIcon from "../assets/heart.png"
import flagIcon from "../assets/flag.png"
import stickerIcon from "../assets/sticker.png"

function LeftSide() {
  return (
    <div className= "outerBox scroll-container"> 
    <div className="filter">
      <p>Apply Filter</p><img src={filterIcon} />
    </div>

    <div className="btn">
        <div class="row">
          <button className="btn1">Trending <img src={trendingIcon} /></button>
            <button className="btn2">Sponsored <img src={sponseredIcon} /></button>
        </div>
        <div class="row">
            <button className="btn3">Newest <img src= {newestIcon} /></button>
            <button className="btn4">Most liked <img src={heartIcon} /></button>
        </div>
    </div>
    <div className="dropDown">
          <select name="category" className="selector1">
              <option value="Full Hd">Category</option>
              <option value="Ultra Hd">Ultra HD</option>
              <option value="1080 PX">1080PX</option>
              <option value="1920 PX">1920PX</option>
          </select>

          <select name="category" className="selector2">

              <option value="Full Hd">&#x1F1EE;&#x1F1F3; India</option>
              <option value="Ultra Hd">America</option>
              <option value="1080 PX">Germany</option>
              <option value="1920 PX">Dubai</option>
          </select>
    </div>

    <div className="sticker">
      <img src = {stickerIcon} />
    </div>
    </div>
  )
}

export default LeftSide