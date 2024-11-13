import React, { useState } from 'react';
import './BloodTypes.css';

const donorsData = {
  'A+': [{ name: 'John Doe', age: 28, location: 'New York' }, { name: 'Emily Smith', age: 24, location: 'Los Angeles' }],
  'B+': [{ name: 'Michael Johnson', age: 35, location: 'Chicago' }],
  'O+': [{ name: 'David Lee', age: 30, location: 'Miami' }],
  'AB+': [{ name: 'Samantha Brown', age: 29, location: 'Boston' }],
  'A-': [],
  'B-': [],
  'O-': [],
  'AB-': [],
};

const BloodTypes = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [donors, setDonors] = useState([]);

  const handleBloodTypeSelect = (bloodGroup) => {
    setSelectedBloodGroup(bloodGroup);
    setDonors(donorsData[bloodGroup] || []);
  };

  return (
    <div className="blood-group-container">
      <h1 className="title">Select a Blood Group</h1>
      <div className="blood-group-buttons">
        {Object.keys(donorsData).map((bloodGroup) => (
          <button key={bloodGroup} className="blood-group-button" onClick={() => handleBloodTypeSelect(bloodGroup)}>
            {bloodGroup}
          </button>
        ))}
      </div>
      
      {selectedBloodGroup && (
        <div className="donor-details-container">
          <h2 className="selected-group">Selected Blood Group: {selectedBloodGroup}</h2>
          <div className="donor-count">Number of Donors: {donors.length}</div>

          {donors.length > 0 ? (
            <div className="donor-list">
              {donors.map((donor, index) => (
                <div key={index} className="donor-card">
                  <h3>{donor.name}</h3>
                  <p>Age: {donor.age}</p>
                  <p>Location: {donor.location}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-donors">No donors available for this blood group.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BloodTypes;
