import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Profile() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>User Profile</h1>
        <div className="profile-info">
          <p><strong>Name:</strong> besttname</p>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Member since:</strong> 2024</p>
        </div>
        <Link to="/" className="nav-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Profile; 