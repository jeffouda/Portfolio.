import React from 'react';
import Sidebar from './components/Sidebar';
import BentoGrid from './components/BentoGrid';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      
      <Sidebar />

      <main className="main-content">
        <div className="header-text">
          <h1>Welcome, Recruiter.</h1>
          <p>Junior Full Stack Developer focused on business logic and clean architecture.</p>
        </div>
        
        <BentoGrid />
      </main>
      
    </div>
  )
}

export default App;