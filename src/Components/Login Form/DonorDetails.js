import React from 'react';
import './DonorDetails.css';

const DonorDetails = ({ donors = [] }) => {
  return (
    <div className="donor-details-container">
      <h2>Donor Details</h2>
      {donors.length > 0 ? (
        <table className="donor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Contact</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.name}</td>
                <td>{donor.age}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.contact}</td>
                <td>{donor.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No donors yet. Be the first to donate!</p>
      )}
    </div>
  );
};

export default DonorDetails;
