import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
        text: "Stay focused, the result will come.",
        author: "Max Erfodimo"
      },
    {
      text: "My dreams. My way. My reality.",
      author: "Max Erfodimo"
    },
    {
      text: "Don't take the fear of failure on your trip for success",
      author: "Max Erfodimo"
    },
    {
      text: "Calmness is the key to well-balanced decisions",
      author: "Max Erfodimo"
    },
    {
      text: "To be strong means to be brave, to accept defeat. After all, it is our defeats that make us stronger.",
      author: "Max Erfodimo"
    },
    {
      text: "Quite often, success does not come just like that, it comes after 1000 attempts to achieve it.",
      author: "Max Erfodimo"
    },
    {
      text: "A defeat is not an end; it is just a beginning of your transformation to success",
      author: "Max Erfodimo"
    },

    {
      text: "One more day in your life and one more possibility to make this world happier.",
      author: "Max Erfodimo"
    }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  useEffect(() => {
    // Auto-advance quotes every 10 seconds
    const interval = setInterval(() => {
      nextQuote();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        <h1>Inspirational Quotes</h1>
        
        <div className="quote-container">
          <div className="quote-text">
            "{quotes[currentQuote].text}"
          </div>
          <div className="quote-author">
            — {quotes[currentQuote].author}
          </div>
          <div className="quote-navigation">
            <button onClick={prevQuote} className="quote-nav-btn">
              ← Previous
            </button>
            <span className="quote-counter">
              {currentQuote + 1} / {quotes.length}
            </span>
            <button onClick={nextQuote} className="quote-nav-btn">
              Next →
            </button>
          </div>
        </div>

        <div className="navigation-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/about" className="nav-button">
            About
          </Link>
          <Link to="/profile" className="nav-button">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Quotes; 