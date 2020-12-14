import React from "react";
// import { render } from "react-dom";
import { Link } from "react-router-dom";
import "../stylesheets/Header.css";

const Header = () => {
  return (
      <React.Fragment>
        <div className="headerContainer">
          <h1 className="appTitle">Experience</h1>
          <div classname="navLinkContainer">
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
          </div>
        </div>
      </React.Fragment>
  );
};



export default Header;
