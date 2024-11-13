import React, { useState } from 'react';
import './Login.css';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in both username and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      console.log(response.data); // Debugging: Check the response from server

      // If login is successful, redirect to home page
      if (response.data.success) {
        navigate('/home');
      } else {
        setError(response.data.error || 'Invalid username or password');
      }
    } catch (err) {
      console.error('Error during login:', err); // Debugging: Catch errors
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <div className="Box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <AccountCircleIcon className="icon" />
          </div>
          <div className="Box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockIcon className="icon" />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="rem">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="log">
          Login
        </button>
        <div className="reglink">
          <p>
            Don't have an account?{' '}
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
