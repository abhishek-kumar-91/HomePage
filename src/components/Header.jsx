import React from 'react'
import bgImage from '../assets/bg.png';
import "../components/Header.css"
import logo from "../assets/logo.png";
import searchIcon from "../assets/searchIcon.png"

function Header() {
  return (
    <div className = "navbarContainer">
       
        <div className="logo">
            <img src={logo} />
            <h3>Bandiya</h3>
        </div>

        <div className="navigation">
                <h4>Trending</h4>
                <h4>Collaborate</h4>
                <h4>Buy</h4>
                <h4>List</h4>

        </div>

        <button className="btnNavbar"><h6 className="text-gradient">Upgrade</h6></button>

        <div className="inputBox">
            <img src={searchIcon} />
            <input type="text" placeholder="Search Ideas or opportunites..." />
        </div>
        
      </div>
  )
}

export default Header