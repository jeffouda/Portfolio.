import React from 'react';
import { ArrowLeft, ExternalLink, Github, AlertTriangle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  return (
    <div className="project-container">
      
      {/* Back Button */}
      <Link to="/" className="btn-secondary" style={{ border: 'none', paddingLeft: 0, marginBottom: '20px' }}>
        <ArrowLeft size={18} /> Back to Dashboard
      </Link>

      {/* Header Area */}
      <header className="project-header">
        <h1 className="project-title">Event Booking System</h1>
        
        <div className="tech-badges">
          <span className="tech-badge">Python</span>
          <span className="tech-badge">Flask</span>
          <span className="tech-badge">PostgreSQL</span>
          <span className="tech-badge">React</span>
        </div>

        <div className="cta-buttons">
          <a href="#" className="btn-primary">
            <ExternalLink size={18} /> Live Demo
          </a>
          <a href="#" className="btn-secondary">
            <Github size={18} /> View Code
          </a>
        </div>
      </header>

      {/*The "Why" (Context) */}
      <section>
        <h2 className="section-title">The Problem</h2>
        <p className="text-content">
          Local community halls in Nairobi often manage bookings using physical notebooks. 
          This leads to double-bookings and lost payments. I built this system to digitalize 
          that process, focusing on <strong>concurrency handling</strong> (preventing two people from booking the same slot).
        </p>
      </section>

      {/* The "How" (Architecture) */}
      <section>
        <h2 className="section-title"><Layers size={24} /> System Architecture</h2>
        
        <div className="architecture-diagram">
          
          {/* Frontend */}
          <div className="arch-box">
            <strong>Frontend</strong>
            <span>React + Vite</span>
          </div>

          {/* Arrow 1 */}
          <div className="arch-arrow">
            <span>JSON</span>
            <div className="arrow-line"></div>
          </div>

          {/* API */}
          <div className="arch-box">
            <strong>API Server</strong>
            <span>Flask (Python)</span>
          </div>

          {/* Arrow 2 */}
          <div className="arch-arrow">
            <span>SQL</span>
            <div className="arrow-line"></div>
          </div>

          {/* Database */}
          <div className="arch-box">
            <strong>Database</strong>
            <span>PostgreSQL</span>
          </div>

        </div>
      </section>
      

      {/* The "Realism" (Mistakes & Growth) */}
      <section>
        <h2 className="section-title"><AlertTriangle size={24} /> Challenges & Mistakes</h2>
        
        <div className="mistakes-box">
          <h3>The "N+1" Query Problem</h3>
          <p>
            Initially, I was fetching events and then looping through them to fetch the user details for each one. 
            This caused the page to load 50+ database queries for just one list.
            <br /><br />
            <strong>The Fix:</strong> I learned how to use <code>JOIN</code> in SQL (and SQLAlchemy) to fetch all the data in a single query, reducing load time by 60%.
          </p>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetails;