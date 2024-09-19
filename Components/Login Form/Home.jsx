import React, { useState } from "react";
import "./Home.css";
import moment from "moment";

const Home = () => {
  const [donorDetails, setDonorDetails] = useState({
    name: "John Doe",
    age: 30,
    bloodGroup: "O+",
    lastDonationDate: "2024-08-01",
  });

  const [donationCenters] = useState([
    { name: "Coimbatore", address: "123 Main St" },
    { name: "Kuniyamuthur", address: "456 Elm St" },
    { name: "Gandhipuram", address: "789 Oak St" },
  ]);

  const [bloodTypes] = useState([
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ]);

  const [bloodGroupCounts] = useState({
    "A+": 25,
    "A-": 15,
    "B+": 30,
    "B-": 10,
    "AB+": 8,
    "AB-": 5,
    "O+": 50,
    "O-": 20,
  });

  const [showForm, setShowForm] = useState(false);
  const [showBloodTypes, setShowBloodTypes] = useState(false);
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [selectedBloodTypeCount, setSelectedBloodTypeCount] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState("");
  const [nextEligibleDate, setNextEligibleDate] = useState("");
  const [showBloodRequestForm, setShowBloodRequestForm] = useState(false);

  const handleApply = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleBloodTypeClick = () => {
    setShowBloodTypes((prev) => !prev);
  };

  const handleBloodTypeSelect = (type) => {
    setSelectedBloodType(type);
    setSelectedBloodTypeCount(bloodGroupCounts[type]);
    setShowBloodTypes(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fullName = formData.get("fullName");
    const age = parseInt(formData.get("age"), 10);
    const bloodGroup = formData.get("bloodGroup");
    const contactNumber = formData.get("contactNumber");
    const address = formData.get("address");
    const lastDonationDate = moment(donorDetails.lastDonationDate);
    const currentDate = moment();
    const daysSinceLastDonation = currentDate.diff(lastDonationDate, "days");

    if (age < 18) {
      setApplicationStatus("Not eligible: You must be at least 18 years old.");
      setNextEligibleDate("");
      return;
    }

    if (daysSinceLastDonation < 30) {
      const nextDate = lastDonationDate.add(30, "days").format("YYYY-MM-DD");
      setApplicationStatus(
        `Not eligible: You can donate again after ${nextDate}.`
      );
      setNextEligibleDate(nextDate);
      return;
    }

    setDonorDetails({
      name: fullName,
      age,
      bloodGroup,
      lastDonationDate: currentDate.format("YYYY-MM-DD"),
    });
    setApplicationStatus("Eligible: You can donate blood now!");
    setNextEligibleDate("");
    setShowForm(false);
  };

  const handleBloodRequestFormOpen = () => {
    setShowBloodRequestForm(true);
  };

  const handleBloodRequestFormClose = () => {
    setShowBloodRequestForm(false);
  };

  const handleBloodRequestSubmit = (event) => {
    event.preventDefault();
    // Handle blood requirement request logic here
    setApplicationStatus("Blood requirement request submitted!");
    handleBloodRequestFormClose();
  };

  return (
    <div className="home">
      <video className="background-video" autoPlay muted loop>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to the Blood Donation App</h1>
        <div className="section donor-details">
          <h2>Donor Details</h2>
          <div className="details-card">
            <p>
              <strong>Name:</strong> {donorDetails.name}
            </p>
            <p>
              <strong>Age:</strong> {donorDetails.age}
            </p>
            <p>
              <strong>Blood Group:</strong> {donorDetails.bloodGroup}
            </p>
            <p>
              <strong>Date of Last Blood Donation:</strong>{" "}
              {donorDetails.lastDonationDate}
            </p>
          </div>
        </div>

        <div className="section donation-centers">
          <h2>Donation Centers</h2>
          <div className="center-list">
            {donationCenters.map((center, index) => (
              <div key={index} className="center-card">
                <h3>{center.name}</h3>
                <p>{center.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section blood-types">
          <h2>Blood Types</h2>
          <div className="types-grid">
            {bloodTypes.map((type, index) => (
              <div
                key={index}
                className="type-card"
                onClick={() => handleBloodTypeSelect(type)}
              >
                {type}
              </div>
            ))}
          </div>
          {selectedBloodType && (
            <div className="blood-type-info">
              <h3>Blood Group: {selectedBloodType}</h3>
              <p>Total Donors: {selectedBloodTypeCount}</p>
            </div>
          )}
        </div>

        <div className="section apply">
          <h2>Apply to Donate Blood</h2>
          <button onClick={handleApply} className="apply-button">
            Apply Now
          </button>
        </div>

        <div className="section blood-request">
          <h2>Request Blood Requirement</h2>
          <button onClick={handleBloodRequestFormOpen} className="apply-button">
            Request Blood
          </button>
        </div>

        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <button onClick={handleCloseForm} className="close-button">
                X
              </button>
              <h2>Application Form</h2>
              <form className="application-form" onSubmit={handleSubmit}>
                <label>
                  Full Name:
                  <input type="text" name="fullName" required />
                </label>
                <label>
                  Age:
                  <input type="number" name="age" required />
                </label>
                <label>
                  Blood Group:
                  <div className="dropdown" onClick={handleBloodTypeClick}>
                    <input
                      type="text"
                      name="bloodGroup"
                      value={selectedBloodType}
                      placeholder="Select Blood Group"
                      readOnly
                      className="dropdown-input"
                    />
                    {showBloodTypes && (
                      <div className="dropdown-menu">
                        {bloodTypes.map((type, index) => (
                          <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleBloodTypeSelect(type)}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </label>
                <label>
                  Contact Number:
                  <input type="text" name="contactNumber" required />
                </label>
                <label>
                  Address:
                  <textarea name="address" required />
                </label>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
              {applicationStatus && (
                <div className="application-status">
                  <p>{applicationStatus}</p>
                </div>
              )}
              {nextEligibleDate && (
                <div className="next-eligible-date">
                  <p>Next Eligible Donation Date: {nextEligibleDate}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {showBloodRequestForm && (
          <div className="form-overlay">
            <div className="form-container">
              <button
                onClick={handleBloodRequestFormClose}
                className="close-button"
              >
                X
              </button>
              <h2>Blood Requirement Request Form</h2>
              <form
                className="application-form"
                onSubmit={handleBloodRequestSubmit}
              >
                <label>
                  Full Name:
                  <input type="text" name="fullName" required />
                </label>
                <label>
                  Blood Type Needed:
                  <input type="text" name="bloodTypeNeeded" required />
                </label>
                <label>
                  Contact Number:
                  <input type="text" name="contactNumber" required />
                </label>
                <label>
                  Address:
                  <textarea name="address" required />
                </label>
                <button type="submit" className="submit-button">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
