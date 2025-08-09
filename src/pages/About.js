import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function About() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>About BesttName</h1>
        <p>BesttName is a mobile app built and designed by Max to inspire users by reminding them that their name is unique and meaningful.</p>
        <h2>Concept</h2>
        <p>At its heart, BesttName is a motivational tool. Users simply enter their name, and the app highlights it as the “best name in the world.” It’s a simple gesture meant to uplift self-esteem and strengthen personal identity — because sometimes, a small reminder of self-worth goes a long way.
</p>
        <Link to="/" className="nav-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default About; 