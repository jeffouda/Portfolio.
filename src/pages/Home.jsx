import React from 'react';
import BentoGrid from '../components/BentoGrid';

const Home = () => {
  return (
    <div>
      <div className="header-text">
        <h1>Welcome, Recruiter.</h1>
        <p>Junior Full Stack Developer focused on business logic and clean architecture.</p>
      </div>
      <BentoGrid />
    </div>
  );
};

export default Home;