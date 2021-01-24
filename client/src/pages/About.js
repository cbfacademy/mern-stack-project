import React from "react";
import "../stylesheets/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <div className="about-container">
        <h1 className="about-header">About Us</h1>
        <div className="about-paragraph">
          {/* <h2>Welcome to Experience.</h2> */}

          <p className="sentence">
            Have you ever applied for a job and got told that you do not have
            enough experience?
          </p>
          <p className="sentence">
            What about wanting to use your skills in a different field and not
            knowing how?
          </p>
          <p className="sentence">
            <span>This website is for you.</span>
          </p>
          <p className="sentence">
            Experience was created to help people, like yourself, find
            opportunities to develop skills, explore industries and improve
            employability.
          </p>
          <p className="sentence"></p>
        </div>
        <Link to="/">
          <button className="about-button">Search Opportunities</button>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default About;
