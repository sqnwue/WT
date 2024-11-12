// src/components/FlightResults.jsx
import React from 'react';
import './FlightResults.css';

const FlightResults = ({ results }) => (
  <div className="flight-results">
    {results.map((result, index) => (
      <div key={index} className="flight-card">
        <p>Flight from {result.from} to {result.to}</p>
        <p>Price: {result.price}</p>
      </div>
    ))}
  </div>
);

export default FlightResults;
