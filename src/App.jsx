import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Routes>
          {/* The Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* The Project Page */}
          <Route path="/project/event-booking" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;