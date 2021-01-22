import React from "react";
import "../stylesheets/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <div className="about-container">
        <h1 className="about-header">About Us</h1>
        <p className="about-paragraph">
          Welcome to Experience. This website is...{" "}
        </p>
        <Link to="/">
          <button className="about-button">Search Opportunities</button>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default About;
