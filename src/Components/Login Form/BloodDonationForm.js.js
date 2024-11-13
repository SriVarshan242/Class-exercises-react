import React from 'react';
import './BloodDonationForm.css';

const BloodDonationForm = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper donate-blood-form">
        <h2>Donate Blood</h2>
        <form>
          <label htmlFor="donate-name">Full Name</label>
          <input type="text" id="donate-name" placeholder="Enter your name" required />

          <label htmlFor="donate-bloodGroup">Blood Group</label>
          <select id="donate-bloodGroup" required>
            <option value="">Select your blood group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>

          <label htmlFor="donate-location">Location</label>
          <input type="text" id="donate-location" placeholder="Enter your location" required />

          <button type="submit" className="submit-button">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default BloodDonationForm;
