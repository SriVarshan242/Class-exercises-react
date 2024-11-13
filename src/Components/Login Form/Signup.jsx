import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Face5Icon from '@mui/icons-material/Face5';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const Signup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Password validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long, contain at least one uppercase, one lowercase, one number, and one special character.'
      );
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        age,
        email,
        bloodGroup,
        password,
      });
      
      // Redirect to login page after successful signup
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="sign">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="n">
          <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
          <AccountCircleIcon className="icon" />
        </div>
        <div className="n">
          <input type="text" placeholder="Age" required onChange={(e) => setAge(e.target.value)} />
          <Face5Icon className="icon" />
        </div>
        <div className="n">
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          <AlternateEmailIcon className="icon" />
        </div>
        <div className="n">
          <input type="text" placeholder="Blood Group" required onChange={(e) => setBloodGroup(e.target.value)} />
          <BloodtypeIcon className="icon" />
        </div>
        <div className="n">
          <input
            type="password"
            className="cr"
            placeholder="Create Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockIcon className="icon" />
        </div>
        <div className="n">
          <input
            type="password"
            className="co"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <LockIcon className="icon" />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="ca">
          <button className="cre">Create Account</button>
        </div>
        <div className="al">
          <p>Already have an account?</p>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
