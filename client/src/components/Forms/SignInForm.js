import React from "react";
// import clientService from "../../services/clientService";
import "../../stylesheets/Form.css";

//Declaring a react component
class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    // state allows you save values, similar to a json object
    this.state = {
      ClientUsername: "",
      ClientPassword: "",
    };
  }

  //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button

  //   this.handleChangeClientUsername = this.handleChangeClientUsername.bind(this);
  //   this.handleChangeClientPassword = this.handleChangeClientPassword.bind(
  //     this
  //   );
  // }
  //Actual definitions of functions
  // taking value in textbox and saving it in the state

  // handleChangeClientUsername(event) {
  //   this.setState({ ClientUsername: event.target.value });
  // }
  // handleChangeClientPassword(event) {
  //   this.setState({ ClientPassword: event.target.value });
  // }

  //Sending post after pressing the submit button
  // handleSubmit(event) {
  //   alert(
  //     "A profile was submitted: " +
  //       this.state.ClientFirstName +
  //       " " +
  //       this.state.ClientLastName
  //   );

  //   //Will create an empty project
  //   var newClient = {
  //     client_id: 0,
  //     first_name: this.state.ClientFirstName,
  //     last_name: this.state.ClientLastName,
  //     company_name: this.state.CompanyName,
  //     email: this.state.ClientEmail,
  //     username: this.state.ClientUsername,
  //     password: this.state.ClientPassword,
  //   };

  //   //create the actual project
  //   clientService.createClient(newClient);
  //   event.preventDefault();
  // }

  render() {
    return (
      <>
        <React.Fragment>
          <h2 className="formTitle">Sign In</h2>
        </React.Fragment>
        <form onSubmit={this.handleSubmit} className="formContainer">
          <label>
            <div className="label">Username:</div>
            <input
              type="text"
              value={this.state.ClientUsername}
              // onChange={this.handleChangeClientUsername}
            />
          </label>
          <label>
            <div className="label">Password:</div>
            <input
              type="text"
              value={this.state.Date}
              // onChange={this.handleClientPassword}
            />
          </label>
          <input type="submit" value="Sign in" className="button" />
          <span className="sign-in-link">
            Do not have an account? Sign up <a href="/signin">here</a>{" "}
          </span>
        </form>
      </>
    );
  }
}

export default SignInForm;
