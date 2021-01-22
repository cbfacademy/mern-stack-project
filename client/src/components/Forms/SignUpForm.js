import React, { useState } from "react";
import clientService from "../../services/clientService";
import "../../stylesheets/Form.css";
import { Link } from "react-router-dom";

//FIELDS DO NOT CLEAR AFTER SUBMISSION

function SignUpForm() {
  const [ClientFirstName, setClientFirstName] = useState("");
  const [ClientLastName, setClientLastName] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [ClientEmail, setClientEmail] = useState("");
  const [ClientUsername, setClientUsername] = useState("");
  const [ClientPassword, setClientPassword] = useState("");

  const handleSubmit = async (e) => {
    alert("Your sign up is complete!");

    var newClient = {
      client_id: 0,
      first_name: ClientFirstName,
      last_name: ClientLastName,
      company_name: CompanyName,
      email: ClientEmail,
      username: ClientUsername,
      password: ClientPassword,
    };

    //create the actual project
    clientService.createClient(newClient);
    e.preventDefault();
  };

  return (
    <>
      <React.Fragment>
        <h2 className="formTitle">Create a New Account</h2>
      </React.Fragment>
      <form onSubmit={handleSubmit} className="formContainer">
        <label>
          <div className="label">First Name:</div>
          <input
            type="text"
            value={ClientFirstName}
            onChange={(e) => setClientFirstName(e.target.value)}
          />
        </label>
        <label>
          <div className="label">Last Name:</div>
          <input
            type="text"
            value={ClientLastName}
            onChange={(e) => setClientLastName(e.target.value)}
          />
        </label>
        <label>
          <div className="label">Company Name:</div>
          <input
            type="textarea"
            value={CompanyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          <div className="label">Email</div>
          <input
            type="text"
            value={ClientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />
        </label>
        <label>
          <div className="label">Username:</div>
          <input
            type="text"
            value={ClientUsername}
            onChange={(e) => setClientUsername(e.target.value)}
          />
        </label>
        <label>
          <div className="label">Password:</div>
          <input
            type="text"
            value={ClientPassword}
            onChange={(e) => setClientPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Sign up" className="button" />
        <div className="login-sentence">
          <p>Already have an account?</p>
          <p className="login-link">
            <Link to="/login">Login here</Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;

//Declaring a react component
// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     // state allows you save values, similar to a json object
//     this.state = {
//       ClientFirstName: "",
//       ClientLastName: "",
//       CompanyName: "",
//       ClientEmail: "",
//       ClientUsername: "",
//       ClientPassword: "",
//     };

//     //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button

//     this.handleChangeClientFirstName = this.handleChangeClientFirstName.bind(
//       this
//     );
//     this.handleChangeClientLastName = this.handleChangeClientLastName.bind(
//       this
//     );
//     this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
//     this.handleChangeClientEmail = this.handleChangeClientEmail.bind(this);
//     this.handleChangeClientUsername = this.handleChangeClientUsername.bind(
//       this
//     );
//     this.handleChangeClientPassword = this.handleChangeClientPassword.bind(
//       this
//     );
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   //Actual definitions of functions
//   // taking value in textbox and saving it in the state
//   handleChangeClientFirstName(event) {
//     this.setState({ ClientFirstName: event.target.value });
//   }
//   handleChangeClientLastName(event) {
//     this.setState({ ClientLastName: event.target.value });
//   }
//   handleChangeCompanyName(event) {
//     this.setState({ CompanyName: event.target.value });
//   }
//   handleChangeClientEmail(event) {
//     this.setState({ ClientEmail: event.target.value });
//   }
//   handleChangeClientUsername(event) {
//     this.setState({ ClientUsername: event.target.value });
//   }
//   handleChangeClientPassword(event) {
//     this.setState({ ClientPassword: event.target.value });
//   }

//   //Sending post after pressing the submit button
//   handleSubmit(event) {
//     // alert(
//     //   "A profile was submitted: " +
//     //     this.state.ClientFirstName +
//     //     " " +
//     //     this.state.ClientLastName
//     // );

//     //Will create an empty project
//     var newClient = {
//       client_id: 0,
//       first_name: this.state.ClientFirstName,
//       last_name: this.state.ClientLastName,
//       company_name: this.state.CompanyName,
//       email: this.state.ClientEmail,
//       username: this.state.ClientUsername,
//       password: this.state.ClientPassword,
//     };

//     //create the actual project
//     clientService.createClient(newClient);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <>
//         <React.Fragment>
//           <h2 className="formTitle">Create a New Account</h2>
//         </React.Fragment>
//         <form onSubmit={this.handleSubmit} className="formContainer">
//           <label>
//             <div className="label">First Name:</div>
//             <input
//               type="text"
//               value={this.state.Client}
//               onChange={this.handleChangeClientFirstName}
//             />
//           </label>
//           <label>
//             <div className="label">Last Name:</div>
//             <input
//               type="text"
//               value={this.state.ClientLasttName}
//               onChange={this.handleChangeClientLastName}
//             />
//           </label>
//           <label>
//             <div className="label">Company Name:</div>
//             <input
//               type="textarea"
//               value={this.state.CompanyName}
//               onChange={this.handleChangeCompanyName}
//             />
//           </label>
//           <label>
//             <div className="label">Email</div>
//             <input
//               type="text"
//               value={this.state.ClientEmail}
//               onChange={this.handleChangeClientEmail}
//             />
//           </label>
//           <label>
//             <div className="label">Username:</div>
//             <input
//               type="text"
//               value={this.state.ClientUsername}
//               onChange={this.handleChangeClientUsername}
//             />
//           </label>
//           <label>
//             <div className="label">Password:</div>
//             <input
//               type="text"
//               value={this.state.ClientPassword}
//               onChange={this.handleClientPassword}
//             />
//           </label>
//           <input type="submit" value="Sign up" className="button" />
//           <span className="sign-up-link">
//             Already have an account? <a href="/signup"> Sign in</a>
//           </span>
//           {/* need to fix the flex element  */}
//         </form>
//       </>
//     );
//   }
// }

// export default SignUpForm;
