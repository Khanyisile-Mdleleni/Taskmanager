import React from "react";
import "./header.scss";
import '../../styles/components/_button.scss';
import logo from "../../assets/images/logo.png"


function Header() {
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
        <img
        src={logo}
        alt="logo image"
        style={{
          width: "25px",
          height: "25px",
          marginTop: '1px'
        }}
      />
          <h4   style={{
          position: "absolute",
          top: "8px",
          left: "50px",
          marginTop: "-2px",
        }}>Task Manager</h4>
        </div>
        <div className="header__buttons">
          <button className="button">Sign In</button>
          <button className="button">Sign Out</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
