// src/pages/Home.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FlightResults from '../components/FlightResults';

const Home = () => {
  const [results, setResults] = useState([
    { from: 'Chennai', to: 'Delhi', price: '$200' },
    { from: 'Chennai', to: 'Mumbai', price: '$150' }
  ]);

  return (
    <div>
      <h1>Millions of cheap flights. One simple search.</h1>
      <SearchBar />
      <FlightResults results={results} />
    </div>
  );
};

export default Home;
