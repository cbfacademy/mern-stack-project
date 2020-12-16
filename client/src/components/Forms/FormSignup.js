import React from "react";

const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h2>
          Sign up to add projects! Create your account by filling out the
          information below.
        </h2>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Create your username"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Create your password"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Conform your password"
          />
        </div>
        <button className="form-input-btn" type="submit">
            Sign up 
        </button>
        <span className="form-input-login">
            Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
