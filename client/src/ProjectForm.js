import React from "react";
import projectService from "./services/projectService";

//Declaring a react component
class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    // state allows you save values, similar to a json object
    this.state = { ClientName: "", ProjectName: "" };

    //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button
    this.handleChangeClientName = this.handleChangeClientName.bind(this);
    this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
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

  //Sending post after pressing the submit button
  handleSubmit(event) {
    alert(
      "A profile was submitted: " +
        this.state.ClientName +
        " " +
        this.state.ProjectName
    );

    //Will create an empty project
    var newProject = {
      project_id: 0,
      client_name: this.state.ClientName,
      project_name: this.state.ProjectName,
      project_description: "",
      location: "",
      date: "",
      contact_information: "",
      skills: ["html", "json", "javascript"],
    };

    //create the actual project
    projectService.createProject(newProject);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Client Name:
          <input
            type="text"
            value={this.state.ClientName}
            onChange={this.handleChangeClientName}
          />
        </label>
        <label>
          Project Name:
          <input
            type="text"
            value={this.state.ProjectName}
            onChange={this.handleChangeProjectName}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ProjectForm;

//Task get it to list projects instead & create service etc
