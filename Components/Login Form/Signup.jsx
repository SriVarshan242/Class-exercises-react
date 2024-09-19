import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Face5Icon from "@mui/icons-material/Face5";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    navigate('/home'); // Redirect to home page
  };

  return (
    <div className="sign">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="n">
          <input type="text" placeholder="Name" required />
          <AccountCircleIcon className="icon" />
        </div>
        <div className="n">
          <input type="text" placeholder="Age" required />
          <Face5Icon className="icon" />
        </div>
        <div className="n">
          <input type="email" placeholder="Email" required />
          <AlternateEmailIcon className="icon" />
        </div>
        <div className="n">
          <input type="text" placeholder="Blood Group" required />
          <BloodtypeIcon className="icon" />
        </div>
        <div className="n">
          <input
            type="password"
            className="cr"
            placeholder="Create Password"
            required
          />
          <LockIcon className="icon" />
        </div>
        <div className="n">
          <input
            type="password"
            className="co"
            placeholder="Confirm Password"
            required
          />
          <LockIcon className="icon" />
        </div>
        <div className="ca">
          <button className="cre">Create Account</button>
        </div>
        <div className="al">
          <p>Already have an account?</p>
          <Link to="/">
            <a>Login</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
