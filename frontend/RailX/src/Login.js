import React from "react";
import "./Login.css";
import logo from "./railx.png"; // Put your image inside src folder

function Login() {
  return (
    <div className="main-container">
      <div className="card">

        {/* Left Side */}
        <div className="left-section">
          <img src={logo} alt="RailX Logo" className="logo" />
        </div>

        {/* Right Side */}
        <div className="right-section">
          <h1>LOGIN</h1>

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />

          <button className="login-btn">Login</button>

          <div className="extra-links">
            <span>Remember me</span>
            <span>Forgot Password?</span>
          </div>

          <p className="signup-text">
            Don’t have an account? <span className="signup-link">Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
