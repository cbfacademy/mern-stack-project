import React, { useState } from "react";
import projectService from "../../services/projectService";
import "../../stylesheets/Form.css";
// import Header from "../src/components/Header";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

//REACT HOOKS

function ProjectForm() {
  const [ClientName, setClientName] = useState("");
  const [ProjectName, setProjectName] = useState("");
  const [ProjectDescription, setProjectDescription] = useState("");
  const [Country, setCountry] = useState("");
  const [Region, setRegion] = useState("");
  const [Date, setDate] = useState("");

  const handleSubmit = async (e) => {
    alert("A profile was submitted: " + ClientName + " - " + ProjectName);

    //Will create an empty project
    var newProject = {
      project_id: 0,
      client_name: ClientName,
      project_name: ProjectName,
      project_description: ProjectDescription,
      location: { Country: Country, Region: Region },
      date: Date,
      contact_information: "",
      skills: ["html", "json", "javascript"],
    };

    //create the actual project
    projectService.createProject(newProject);
    e.preventDefault();
  };

  return (
    <>
      <div className="content-wrap">
        <React.Fragment>
          <h2 className="formTitle">Project Form</h2>
        </React.Fragment>
        <form onSubmit={handleSubmit} className="formContainer">
          <label>
            <div className="label">Client Name:</div>
            <input
              type="text"
              value={ClientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </label>
          <label>
            <div className="label">Project Name:</div>
            <input
              type="text"
              value={ProjectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>
          <label>
            <div className="label">Project Description:</div>
            <input
              type="textarea"
              value={ProjectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={5}
              cols={5}
            />
          </label>
          <label>
            <div className="label">Location:</div>
            <CountryDropdown
              value={Country}
              onChange={(val) => setCountry(val)}
              className="countryDropdown"
            />
            <RegionDropdown
              country={Country}
              value={Region}
              onChange={(val) => setRegion(val)}
              className="regionDropdown"
            />
          </label>
          <label>
            <div className="label">Application Deadline:</div>
            <input
              type="date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    </>
  );
}

export default ProjectForm;

//USING CLASS COMPONENTS

//Declaring a react component
// class ProjectForm extends React.Component {
//   constructor(props) {
//     super(props);
//     // state allows you save values, similar to a json object
//     this.state = {
//       ClientName: "",
//       ProjectName: "",
//       ProjectDescription: "",
//       Country: "",
//       Region: "",
//       Date: "",
//     };

//     //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button
//     this.handleChangeClientName = this.handleChangeClientName.bind(this);
//     this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
//     this.handleChangeProjectDescription = this.handleChangeProjectDescription.bind(
//       this
//     );
//     this.handleChangeDate = this.handleChangeDate.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   selectCountry(val) {
//     this.setState({ Country: val });
//   }

//   selectRegion(val) {
//     this.setState({ Region: val });
//   }

//   //Actual definitions of functions
//   // taking value in textbox and saving it in the state
//   handleChangeClientName(event) {
//     this.setState({ ClientName: event.target.value });
//   }

//   handleChangeProjectName(event) {
//     this.setState({ ProjectName: event.target.value });
//   }

//   handleChangeProjectDescription(event) {
//     this.setState({ ProjectDescription: event.target.value });
//   }

//   handleChangeLocation(event) {
//     this.setState({ Location: event.target.value });
//   }

//   handleChangeDate(event) {
//     this.setState({ Date: event.target.value });
//   }

//   //Sending post after pressing the submit button
//   handleSubmit(event) {
//     alert(
//       "A profile was submitted: " +
//         this.state.ClientName +
//         "- " +
//         this.state.ProjectName
//     );

//     //Will create an empty project
//     var newProject = {
//       project_id: 0,
//       client_name: this.state.ClientName,
//       project_name: this.state.ProjectName,
//       project_description: this.state.ProjectDescription,
//       location: { Country: this.state.Country, Region: this.state.Region },
//       date: this.state.Date,
//       contact_information: "",
//       skills: ["html", "json", "javascript"],
//     };

//     //create the actual project
//     projectService.createProject(newProject);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <>
//         <React.Fragment>
//           <h2 className="formTitle">Project Form</h2>
//         </React.Fragment>
//         <form onSubmit={this.handleSubmit} className="formContainer">
//           <label>
//             <div className="label">Client Name:</div>
//             <input
//               type="text"
//               value={this.state.ClientName}
//               onChange={this.handleChangeClientName}
//             />
//           </label>
//           <label>
//             <div className="label">Project Name:</div>
//             <input
//               type="text"
//               value={this.state.ProjectName}
//               onChange={this.handleChangeProjectName}
//             />
//           </label>
//           <label>
//             <div className="label">Project Description:</div>
//             <input
//               type="textarea"
//               value={this.state.ProjectDescription}
//               onChange={this.handleChangeProjectDescription}
//               rows={5}
//               cols={5}
//             />
//           </label>
//           <label>
//             <div className="label">Location:</div>
//             <CountryDropdown
//               value={this.state.Country}
//               onChange={(val) => this.selectCountry(val)}
//               className="countryDropdown"
//             />
//             <RegionDropdown
//               country={this.state.Country}
//               value={this.state.Region}
//               onChange={(val) => this.selectRegion(val)}
//               className="regionDropdown"
//             />
//           </label>
//           <label>
//             <div className="label">Application Deadline:</div>
//             <input
//               type="date"
//               value={this.state.Date}
//               onChange={this.handleChangeDate}
//             />
//           </label>

//           <input type="submit" value="Submit" className="button" />
//         </form>
//       </>
//     );
//   }
// }

// export default ProjectForm;

// DROPDOWN FOR LOCATION

// class Example extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = { country: '', region: '' };
//   }

//   render () {
//     const { country, region } = this.state;
//     return (
//       <div>

//       </div>
//     );
//   }
// }
