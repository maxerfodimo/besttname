import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  const [userName, setUserName] = useState('Your name');

  useEffect(() => {
    // Read from localStorage on component mount
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        <h1>You are unique</h1>
        <h2>{userName} is one of the <span className="highlight">besttname</span> in the world</h2>
        <div className="navigation-buttons">
        <Link to="/settings" className="nav-button">
            Enter your name
          </Link>

          <Link to="/quotes" className="nav-button">
            Quotes
          </Link>
          <Link to="/about" className="nav-button">
            About
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home; 