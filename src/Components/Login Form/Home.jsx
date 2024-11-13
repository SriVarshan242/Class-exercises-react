import React, { useState } from 'react';
import './Home.css';
import DonorDetails from './DonorDetails';
import DonationCenters from './DonationCenters';
import BloodTypes from './BloodTypes';
import BloodDonationForm from './BloodDonationForm.js';
import BloodRequestForm from './BloodRequestForm';

const Home = () => {
  const [donorDetails, setDonorDetails] = useState({
    name: 'John Doe',
    age: 30,
    bloodGroup: 'O+',
    lastDonationDate: '2024-08-01',
  });

  const [donationCenters] = useState([
    { name: 'Coimbatore', address: '123 Main St' },
    { name: 'Kuniyamuthur', address: '456 Elm St' },
    { name: 'Gandhipuram', address: '789 Oak St' },
  ]);

  const [bloodTypes] = useState(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
  
  // State for forms
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleApply = () => {
    setShowDonationForm(true); // Open the donation form
  };

  const handleRequestBlood = () => {
    setShowRequestForm(true); // Open the blood request form
  };

  const handleCloseDonationForm = () => {
    setShowDonationForm(false); // Close the donation form
  };

  const handleCloseRequestForm = () => {
    setShowRequestForm(false); // Close the request form
  };

  return (
    <div className="home">
      <video className="background-video" autoPlay muted loop>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to the Blood Donation App</h1>

        {/* Donor Details Section */}
        <DonorDetails donorDetails={donorDetails} />

        {/* Donation Centers Section */}
        <DonationCenters donationCenters={donationCenters} />

        {/* Blood Types Section */}
        <BloodTypes bloodTypes={bloodTypes} />

        {/* Apply to Donate Blood Section */}
        <div className="section apply">
          <h2>Apply to Donate Blood</h2>
          <button onClick={handleApply} className="apply-button">
            Apply Now
          </button>
        </div>

        {/* Request Blood Section */}
        <div className="section request">
          <h2>Request Blood</h2>
          <button onClick={handleRequestBlood} className="request-button">
            Request Blood
          </button>
        </div>

        {/* Donation Form Overlay */}
        {showDonationForm && (
          <div className="form-overlay">
            <div className="form-container">
              <button onClick={handleCloseDonationForm} className="close-button">
                X
              </button>
              <BloodDonationForm 
                onClose={handleCloseDonationForm} 
                setDonorDetails={setDonorDetails} 
              />
            </div>
          </div>
        )}

        {/* Request Form Overlay */}
        {showRequestForm && (
          <div className="form-overlay">
            <div className="form-container">
              <button onClick={handleCloseRequestForm} className="close-button">
                X
              </button>
              <BloodRequestForm 
                onClose={handleCloseRequestForm} 
              />
            </div>
          </div>
        )}
        
        {/* Other Components can be added here */}
      </div>
    </div>
  );
};

export default Home;
