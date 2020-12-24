import React from "react";
import clientService from "./services/clientService";
import "../src/stylesheets/Form.css";

//Declaring a react component
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    // state allows you save values, similar to a json object
    this.state = {
      ClientFirstName: "",
      ClientLastName: "",
      CompanyName: "",
      ClientEmail: "",
      ClientUsername: "",
      ClientPassword: "",
    };

    //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button

    this.handleChangeClientFirstName = this.handleChangeClientFirstName.bind(
      this
    );
    this.handleChangeClientLastName = this.handleChangeClientLastName.bind(
      this
    );
    this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
    this.handleChangeClientEmail = this.handleChangeClientEmail.bind(this);
    this.handleChangeClientUsername = this.handleChangeClientUsername.bind(
      this
    );
    this.handleChangeClientPassword = this.handleChangeClientPassword.bind(
      this
    );
  }
  //Actual definitions of functions
  // taking value in textbox and saving it in the state
  handleChangeClientFirstName(event) {
    this.setState({ ClientFirstName: event.target.value });
  }
  handleChangeClientLastName(event) {
    this.setState({ ClientLastName: event.target.value });
  }
  handleChangeCompanyName(event) {
    this.setState({ CompanyName: event.target.value });
  }
  handleChangeClientEmail(event) {
    this.setState({ ClientEmail: event.target.value });
  }
  handleChangeClientUsername(event) {
    this.setState({ ClientUsername: event.target.value });
  }
  handleChangeClientPassword(event) {
    this.setState({ ClientPassword: event.target.value });
  }

  //Sending post after pressing the submit button
  handleSubmit(event) {
    alert(
      "A profile was submitted: " +
        this.state.ClientFirstName +
        " " +
        this.state.ClientLastName
    );

    //Will create an empty project
    var newClient = {
      client_id: 0,
      first_name: this.state.ClientFirstName,
      last_name: this.state.ClientLastName,
      company_name: this.state.CompanyName,
      email: this.state.ClientEmail,
      username: this.state.ClientUsername,
      password: this.state.ClientPassword,
    };

    //create the actual project
    clientService.createClient(newClient);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <React.Fragment>
          <h2 className="formTitle">Create a New Account</h2>
        </React.Fragment>
        <form onSubmit={this.handleSubmit} className="formContainer">
          <label>
            <div className="label">First Name:</div>
            <input
              type="text"
              value={this.state.Client}
              onChange={this.handleChangeClientFirstName}
            />
          </label>
          <label>
            <div className="label">Last Name:</div>
            <input
              type="text"
              value={this.state.ClientLasttName}
              onChange={this.handleChangeClientLastName}
            />
          </label>
          <label>
            <div className="label">Company Name:</div>
            <input
              type="textarea"
              value={this.state.CompanyName}
              onChange={this.handleChangeCompanyName}
            />
          </label>
          <label>
            <div className="label">Email</div>
            <input
              type="text"
              value={this.state.ClientEmail}
              onChange={this.handleChangeClientEmail}
            />
          </label>
          <label>
            <div className="label">Username:</div>
            <input
              type="text"
              value={this.state.ClientUsername}
              onChange={this.handleChangeClientUsername}
            />
          </label>
          <label>
            <div className="label">Password:</div>
            <input
              type="text"
              value={this.state.Date}
              onChange={this.handleClientPassword}
            />
          </label>
          <input type="submit" value="Sign up" className="button" />
          <span className="sign-up-link">
            Already have an account? <a href="/signup"> Sign in</a>
          </span>
          {/* need to fix the flex element  */}
        </form>
      </>
    );
  }
}

export default SignUpForm;
