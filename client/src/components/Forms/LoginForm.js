import React, { useState } from "react";
// import clientService from "../../services/clientService";
import "../../stylesheets/Form.css";
import PropTypes from "prop-types";

//Declaring a react component

async function loginUser(credentials) {
  return fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "client/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LoginForm({ setToken }) {
  const [ClientUsername, setClientUsername] = useState("");
  const [ClientPassword, setClientPassword] = useState("");

  const handleSubmit = async (e) => {
    // alert("Welcome back " + CompanyName)

    e.preventDefault();
    const token = await loginUser({
      ClientUsername,
      ClientPassword,
    });
    setToken(token);
  };

  return (
    <>
      <React.Fragment>
        <h2 className="formTitle">Welcome Back!</h2>
      </React.Fragment>
      <form onSubmit={handleSubmit} className="formContainer">
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
            type="password"
            value={ClientPassword}
            onChange={(e) => setClientPassword(e.target.value)}
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
LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

// //CLASS COMPONENTS

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     // state allows you save values, similar to a json object
//     this.state = {
//       ClientUsername: "",
//       ClientPassword: "",
//     };

//     //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button
//     this.handleChangeClientUsername = this.handleChangeClientUsername.bind(
//       this
//     );
//     this.handleChangeClientPassword = this.handleChangeClientPassword.bind(
//       this
//     );
//   }

//   //Actual definitions of functions
//   // taking value in textbox and saving it in the state

//   handleChangeClientUsername(event) {
//     this.setState({ ClientUsername: event.target.value });
//   }
//   handleChangeClientPassword(event) {
//     this.setState({ ClientPassword: event.target.value });
//   }

//   //Sending post after pressing the submit button
//   async handleSubmit(event) {
//     const username = this.state.ClientUsername;
//     const password = this.state.ClientPassword;

//     event.preventDefault();
//     const token = await loginUser({
//       username,
//       password,
//     });
//     this.props.setToken(token)
//   }

//   render() {

//     const { setToken } = this.props; // HAVING ISSUES WITH THIS

//     return (
//       <>
//         <React.Fragment>
//           <h2 className="formTitle">Welcome Back!</h2>
//         </React.Fragment>
//         <form onSubmit={this.handleSubmit} className="formContainer">
//           <label>
//             <div className="label">Username:</div>
//             <input
//               type="text"
//               value={this.state.ClientUsername}
//               onChange={event =>this.handleChangeClientUsername(event)}
//             />
//           </label>
//           <label>
//             <div className="label">Password:</div>
//             <input
//               type="text"
//               value={this.state.Date}
//               onChange={event => this.handleClientPassword(event)}
//             />
//           </label>
//           <input type="submit" value="Sign in" className="button" />
//           <span className="sign-in-link">
//             Do not have an account? Sign up <a href="/signin">here</a>{" "}
//           </span>
//         </form>
//       </>
//     );
//   }
// }

// //Add in the PropType from the new prop and destructure the props object to pull out the setToken prop.

// LoginForm.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

export default LoginForm;
