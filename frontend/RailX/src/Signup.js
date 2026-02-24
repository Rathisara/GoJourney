import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import trainImage from "./train.png";

function Signup() {
  return (
    <div className="signup-container">
      
      <div className="signup-left">
        <img src={trainImage} alt="Train" />
      </div>

      <div className="signup-right">
        <h2>Create an account</h2>
        <p>
          Already have an account?{" "}
          <Link to="/" className="login-link">
            Login
          </Link>
        </p>

        <div className="name-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="text" placeholder="Mobile Number" />
        <input type="password" placeholder="Enter your Password" />
        <input type="password" placeholder="Confirm your Password" />

        <div className="checkbox">
          <input type="checkbox" />
          <label>I agree to the Terms & Conditions</label>
        </div>

        <button className="create-btn">Create Account</button>
      </div>

    </div>
  );
}

export default Signup;
