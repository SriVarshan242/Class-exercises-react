import React from 'react';
import './BloodRequestForm.css';

const BloodRequestForm = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper request-blood-form">
        <h2>Request Blood</h2>
        <form>
          <label htmlFor="request-name">Full Name</label>
          <input type="text" id="request-name" placeholder="Enter your name" required />

          <label htmlFor="request-bloodGroup">Blood Group Needed</label>
          <select id="request-bloodGroup" required>
            <option value="">Select the blood group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>

          <label htmlFor="request-location">Location</label>
          <input type="text" id="request-location" placeholder="Enter your location" required />

          <button type="submit" className="submit-button">Request Blood</button>
        </form>
      </div>
    </div>
  );
};

export default BloodRequestForm;
