import React from "react";
import "./header.scss";
import "../../styles/components/_button.scss";
import logo from "../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from '../../redux/authSlice';
import history from "../../history";

function Header() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem("auth");
    history.push("/signin");
    window.location.reload();
  };
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
              marginTop: "1px",
            }}
          />
          <h4
            style={{
              position: "absolute",
              top: "8px",
              left: "55px",
              marginTop: "-2px",
            }}
          >
            Task Manager
          </h4>
        </div>
      </nav>
    </div>
  );
}

export default Header;
