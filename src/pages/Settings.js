import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pages.css';

function Settings() {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load current name from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name.trim());
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        navigate('/');
      }, 1500);
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        <h1>Change Your Name</h1>
        <div className="name-input-section">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
            maxLength={50}
          />
          <button 
            onClick={handleSaveName}
            className="save-button"
          >
            Save Name
          </button>
          {saved && (
            <div className="save-message">
              Name saved successfully! Redirecting...
            </div>
          )}
        </div>
        <Link to="/" className="nav-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Settings; 