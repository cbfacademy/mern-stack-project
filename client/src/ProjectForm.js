import React from "react";
import projectService from "./services/projectService";
import "../src/stylesheets/Form.css";
import Header from "../src/components/Header";

//Declaring a react component
class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    // state allows you save values, similar to a json object
    this.state = {
      ClientName: "",
      ProjectName: "",
      ProjectDescription: "",
      Location: "",
      Date: "",
    };

    //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button
    this.handleChangeClientName = this.handleChangeClientName.bind(this);
    this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
    this.handleChangeProjectDescription = this.handleChangeProjectDescription.bind(
      this
    );
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Actual definitions of functions
  // taking value in textbox and saving it in the state
  handleChangeClientName(event) {
    this.setState({ ClientName: event.target.value });
  }

  handleChangeProjectName(event) {
    this.setState({ ProjectName: event.target.value });
  }

  handleChangeProjectDescription(event) {
    this.setState({ ProjectDescription: event.target.value });
  }

  handleChangeLocation(event) {
    this.setState({ Location: event.target.value });
  }

  handleChangeDate(event) {
    this.setState({ Date: event.target.value });
  }

  //Sending post after pressing the submit button
  handleSubmit(event) {
    alert(
      "A profile was submitted: " +
        this.state.ClientName +
        "- " +
        this.state.ProjectName
    );

    //Will create an empty project
    var newProject = {
      project_id: 0,
      client_name: this.state.ClientName,
      project_name: this.state.ProjectName,
      project_description: this.state.ProjectDescription,
      location: this.state.Location,
      date: this.state.Date,
      contact_information: "",
      skills: ["html", "json", "javascript"],
    };

    //create the actual project
    projectService.createProject(newProject);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <React.Fragment>
          <Header />
          <h2 className="formTitle">Project Form</h2>
        </React.Fragment>
        <form onSubmit={this.handleSubmit} className="formContainer">
          <label>
            <div className="label">Client Name:</div>
            <input
              type="text"
              value={this.state.ClientName}
              onChange={this.handleChangeClientName}
            />
          </label>
          <label>
            <div className="label">Project Name:</div>
            <input
              type="text"
              value={this.state.ProjectName}
              onChange={this.handleChangeProjectName}
            />
          </label>
          <label>
            <div className="label">Project Description:</div>
            <input
              type="textarea"
              value={this.state.ProjectDescription}
              onChange={this.handleChangeProjectDescription}
            />
          </label>
          <label>
            <div className="label">Location:</div>
            <input
              type="text"
              value={this.state.Location}
              onChange={this.handleChangeLocation}
            />
          </label>
          <label>
            <div className="label">Deadline:</div>
            <input
              type="text"
              value={this.state.Date}
              onChange={this.handleChangeDate}
            />
          </label>

          <input type="submit" value="Submit" className="button" />
        </form>
      </>
    );
  }
}

export default ProjectForm;
