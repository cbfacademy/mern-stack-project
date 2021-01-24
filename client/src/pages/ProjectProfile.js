import React from "react";
import "../stylesheets/ProjectProfile.css";

function ProjectProfile() {
  return <h1 className="profile-header">Project</h1>;

  // const renderProject = (project) => {
  //   return (
  //     <li key={project.id} className="project-profile">
  //       <div className="project-elements">
  //         <h3 className="project-name">{`${project.project_name}`} </h3>
  //         <h4 className="client-name">{`${project.client_name}`}</h4>
  //         <h5 className="project-Location">{`${project.location.Region}, ${project.location.Country}`}</h5>
  //         <Link to="/projectprofile">
  //           <button className="Apply">View</button>
  //         </Link>
  //         {/* <p className="project-date">{`${project.date}`}</p> */}
  //       </div>
  //       {/* <div className="description-flex">
  //         <p className="project-description">{`${project.project_description}`}</p>
  //       </div> */}
  //     </li>
  //   );
}

export default ProjectProfile;
