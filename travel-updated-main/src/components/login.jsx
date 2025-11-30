import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);

      alert("Login Successful!");
      navigate("/");
      window.location.reload();
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          className="login-input"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="login-input"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="login-submit">
          Login
        </button>

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
