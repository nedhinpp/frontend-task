import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = doValidation();
    if (isValid) {
        history.push("/home");
    }
  };

  const doValidation = () => {
    const emailError = {};
    const passwordError = {};
    let isValid = true;

    if (email.trim().length < 1) {
      emailError.emailErrorText = "Please enter a valid email Id or Username";
      isValid = false;
    }
    if (password.trim().length < 8) {
      passwordError.passwordErrorText =
        "Please enter a password which is having minimum 8 characters.";
      isValid = false;
    }
    setEmailError(emailError);
    setPasswordError(passwordError);
    return isValid;
  };

  return (
    <div className="login-photo">
      <div id="container" className="form-container">
        <form onSubmit={handleLogin}>
        <h2 className="text-start"><strong>Sign In</strong>.</h2>
            <div className="text-start sign-up-text"><strong>New User?</strong> <Link className="sign-up-link" to="#">Create an account</Link></div>
          <div className="form-group" id="email-container">
            <input
              className="form-control"
              id="email-field"
              name="email"
              type="text"
              placeholder="Username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label" id="email-label"></label>
            <span style={{ color: "red" }}>{emailError.emailErrorText}</span>
          </div>
          <div className="inputError" id="email-inputError"></div>
          
          <div className="form-group" id="pwd-container">
            <input
              className="form-control"
              id="pwd-field"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label" id="pwd-label"></label>
            <span style={{ color: "red" }}>
            {passwordError.passwordErrorText}
          </span>
          </div>
          <div className="form-group text-start">
                <div className="form-check"><label className="form-check-label">
                    <input className="form-check-input" type="checkbox"/>Keep me signed in.</label></div>
            </div>
          <div className="box-container" id="login-button-container">
            <input id="login-button" className="submit-btn" type="submit" value="Sign In" />
          </div>
            <div className="sign-in-alt-text">
                <span>Or Sign In With</span>
            </div>
            <div className="social-icons">
                <button type="button"><i className="fa fa-google"></i></button>
                <button type="button"><i className="fa fa-facebook"></i></button>
                <button type="button"><i className="fa fa-linkedin"></i></button>
                <button type="button"><i className="fa fa-twitter"></i></button>
            </div>
        </form>
        <div className="image-holder"></div>
      </div>
    </div>
  );
}

export default Login;