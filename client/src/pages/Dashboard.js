// import React, { useState } from "react";
import React from "react";
import "../stylesheets/Dashboard.css";
import { Link } from "react-router-dom";
// import LoginForm from "./Forms/LoginForm";

export default function Dashboard() {
  //   const { token, setToken } = useState();

  //   //THIS MAKES THE LOGIN PAGE THE FIRST THING ON THE WEBSIT
  //   if (!token) {
  //     return <LoginForm setToken={setToken} />;
  //   }

  return (
    <>
      <div>
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="flex-container">
        <div className="dashboard-profile">
          <h2 className="profile-title">Client Projects</h2>
          <p className="profile-paragraph">
            View, update and delete your projects
          </p>
          <Link to="/clientprojects">
            <button className="profile-button">View Projects</button>
          </Link>
        </div>
        <div className="dashboard-profile">
          <h2 className="profile-title">Project Form</h2>
          <p className="profile-paragraph">
            Complete the form to create a project
          </p>
          <Link to="/projectform">
            <button className="profile-button">Create Project</button>
          </Link>
        </div>
      </div>
    </>
  );
}
