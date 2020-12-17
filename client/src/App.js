import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "../src/components/Header";
import projectService from "./services/projectService";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import ProjectForm from "./ProjectForm";
import "./stylesheets/App.css";
// import Form from "../src/components/Forms/Form";

function App() {
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

  const createProject = async () => {
    // copy this and three const and create versions for projects
    // let res = await projectService.createProject();
    await projectService.createProject();
  };

  const renderProject = (project) => {
    return (
      <li key={project.id} className="project-profile">
        <div className="project-elements">
          <h3 className="project-name">{`${project.project_name}`} </h3>
          <h4 className="client-name">{`${project.client_name}`}</h4>
        </div>
        <div className="description-flex">
          <p className="project-description">{`${project.project_description}`}</p>
        </div>
      </li>
    );
  };

  return (
    //32-41 telling the app what to do
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Navbar />
              <div>
                <ul className="projects-container">
                  {projects && projects.length > 0 ? (
                    projects.map((project) => renderProject(project)) // looping through project and rendering on the screen
                  ) : (
                    <p> No projects found </p>
                  )}
                </ul>
                <div>
                  <button onClick={createProject}>Button</button>
                </div>
              </div>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <React.Fragment>
              <Navbar />
              <About />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/projectform"
          render={() => (
            <React.Fragment>
              <Navbar />
              <ProjectForm />
            </React.Fragment>
          )}
        />
    
      </Router>
    </>
  );
}

export default App;

//Task get it to list projects instead & create service etc

// SERVICES - calling the api's created
// import userService from './services/userService'; // create a projectService (copy line by line)

// function App() {
//   const [users, setusers] = useState(null);

//   useEffect(() => { // checks if there is any users (line 7)
//     if (!users) {
//       getusers();
//     }
//   });

//   const getusers = async () => { // copy this and three const and create versions for projects
//     let res = await userService.getAll();
//     setusers(res);
//   };

//   const renderUser = (user) => {
//     return (
//       <li key={user._id}>
//         <h3>
//           {`${user.first_name}
//           ${user.last_name}`}
//         </h3>
//         <p>{user.location}</p>
//       </li>
//     );
//   };

//   return ( //32-41 telling the app what to do
//     <div>
//       <ul>
//         {users && users.length > 0 ? (
//           users.map((user) => renderUser(user)) // looping through users and rendering on the screen
//         ) : (
//           <p>No users found</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App
