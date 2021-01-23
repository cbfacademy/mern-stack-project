import React, { useState, useEffect } from "react";
import projectService from "../services/projectService";

function Opportunities() {
  const [projects, setprojects] = useState(null);

  useEffect(() => {
    if (!projects) {
      getprojects();
    }
  });

  const getprojects = async () => {
    // copy this and three const and create versions for projects
    let res = await projectService.getAll();
    setprojects(res);
  };

  const renderProject = (project) => {
    return (
      <li key={project.id} className="project-profile">
        <div className="project-elements">
          <h3 className="project-name">{`${project.project_name}`} </h3>
          <h4 className="client-name">{`${project.client_name}`}</h4>
          <h5 className="project-Location">{`${project.location.Region}, ${project.location.Country}`}</h5>
          {/* <p className="project-date">{`${project.date}`}</p> */}
        </div>
        {/* <div className="description-flex">
              <p className="project-description">{`${project.project_description}`}</p>
            </div> */}
      </li>
    );
  };
  

  return (
    <>
      <h1 className="projects-header">Opportunities</h1>
      <div>
        <ul className="projects-container">
          {projects && projects.length > 0 ? (
            projects.map((project) => renderProject(project)) // looping through project and rendering on the screen
          ) : (
            <p> No projects found </p>
          )}
        </ul>
      </div>
    </>
  );
}

export default Opportunities;

//USE EFFECT SO IT COMMUNICATES WITH THE SERVER
