import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import './App.css';

function App() {
  return (
    <Router>
      <Header
        logoText="NXTIDE"
        links={[
          { label: 'Software Services', path: '/services' },
          { label: 'Case Studies', path: '/case-studies' },
          { label: 'Pricing', path: '/pricing' },
          { label: 'About Us', path: '/about' },
          { label: 'Blog', path: '/blog' },
        ]}
        contactButton="Contact Us"
      />
      <Routes>
        <Route
          path="/"
          element={
            <HeroSection
  title="Nearshore & Offshore Software Development Centers for companies in Western Europe & USA"
  subtitle="Whenever you are looking for a full-product development partner, a group of engineers, or a trusted party who will help you establish your own IT department in Poland – we got you covered."
  ctaText="Schedule a Call"
  sideImage="https://nxtide.com/wp-content/uploads/2021/12/9Y4A1623.jpg" // Replace with actual side image URL
  playButton={true}
/>

          }
        />
      </Routes>
    </Router>
  );
}

export default App;
