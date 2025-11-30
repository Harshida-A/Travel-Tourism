import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          className="login-input"
          placeholder="Enter Email"
        />

        <input
          type="password"
          className="login-input"
          placeholder="Enter Password"
        />

        <button className="login-submit">Login</button>

        <p className="signup-text">
          Don't have an account?{" "}
          <a className="signup-link" href="/signup">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}