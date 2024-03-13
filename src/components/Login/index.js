// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";

import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginDetails, setDetails] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate credentials
    if (username === "Naveen" && password === "Naveen123") {
      navigate("/homepage");
      console.log("hi");
    } else {
      alert("Invalid username or password");
    }
  };
  const details = () => {
    setDetails((pre) => !pre);
  };
  const cont = () => (
    <div className="details">
      <p>Username: Naveen</p>
      <p>Password: Naveen123</p>
    </div>
  );

  return (
    <div className="body">
      {loginDetails ? cont() : null}
      <div className="log_container">
        <div className="icon-container">
          <FaArrowRightLong className="arrow" />
          <HiInformationCircle className="icon" onClick={details} />
        </div>
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              className="input"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="UserName"
            />
          </div>
          <div>
            <input
              type="password"
              className="input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button className="custom-btn btn-12">
            <span>Click!</span>
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
