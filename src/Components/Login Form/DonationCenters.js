import React, { useState } from 'react';
import './DonationCenters.css';

// Importing react-leaflet components
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DonationCenters = () => {
  // Hardcoded data for donation centers
  const donationCenters = [
    {
      name: 'City Blood Bank',
      address: '123 Main St, Citytown',
      phone: '123-456-7890',
      openingHours: '9:00 AM - 5:00 PM',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    {
      name: 'Metro Donation Center',
      address: '456 Side St, Metropolis',
      phone: '987-654-3210',
      openingHours: '8:00 AM - 4:00 PM',
      latitude: 40.7306,
      longitude: -73.9352,
    },
    {
      name: 'Downtown Blood Donation',
      address: '789 West Ave, Downtown',
      phone: '555-123-4567',
      openingHours: '10:00 AM - 6:00 PM',
      latitude: 40.748817,
      longitude: -73.985428,
    },
  ];

  const [selectedCenter, setSelectedCenter] = useState(null);

  const handleCenterClick = (center) => {
    setSelectedCenter(center);
  };

  return (
    <div className="donation-centers">
      <h2>Donation Centers</h2>
      <div className="center-list">
        {donationCenters.map((center, index) => (
          <div 
            key={index} 
            className="center-card" 
            onClick={() => handleCenterClick(center)}
          >
            <h3>{center.name}</h3>
            <p>{center.address}</p>
          </div>
        ))}
      </div>

      {selectedCenter && (
        <div className="center-details">
          <h3>{selectedCenter.name}</h3>
          <p>{selectedCenter.address}</p>
          <p><strong>Phone:</strong> {selectedCenter.phone}</p>
          <p><strong>Opening Hours:</strong> {selectedCenter.openingHours}</p>

          {/* Map displaying the selected center's location */}
          <MapContainer 
            center={[selectedCenter.latitude, selectedCenter.longitude]} 
            zoom={13} 
            style={{ height: '300px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[selectedCenter.latitude, selectedCenter.longitude]} />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default DonationCenters;
