import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import railImage from "./railx.png";

function Login() {
  return (
    <div className="login-container">
      
      <div className="login-left">
        <img src={railImage} alt="RailX" />
      </div>

      <div className="login-right">
        <h1>LOGIN</h1>

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />

        <button className="login-btn">Login</button>

        <div className="login-links">
          <span>Remember me</span>
          <span>Forgot Password?</span>
        </div>

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>

    </div>
  );
}

export default Login;
