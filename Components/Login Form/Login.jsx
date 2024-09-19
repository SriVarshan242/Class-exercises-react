import React, { useState } from "react";
import "./Login.css";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("Log in");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>{action}</h1>
        <div>
          <div className="Box">
            <input type="text" placeholder="Username" required />
            <AccountCircleIcon className="icon" />
          </div>
          <div className="Box">
            <input type="password" placeholder="Password" required />
            <LockIcon className="icon" />
          </div>
        </div>
        <div className="rem">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a>Forgot password?</a>
        </div>
        <button type="submit" className="log">
          Login
        </button>
        <div className="reglink">
          <p>
            Don't have an account?
            <Link to="/signup">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
