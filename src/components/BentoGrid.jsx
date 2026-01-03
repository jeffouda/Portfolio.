import React from 'react';
import { ArrowUpRight, Github, Database, Server, Code } from 'lucide-react';
import './BentoGrid.css'; // We'll make this next

const BentoGrid = () => {
  return (
    <div className="bento-container">
      
      {/* TILE 1: The HERO Project (Spans 2 columns) */}
      <div className="bento-tile hero-tile">
        <div className="tile-header">
          <span className="tag">Core Project</span>
          <ArrowUpRight size={20} />
        </div>
        <h2>Event Booking System</h2>
        <p>A full-stack booking engine handling conflicts, user auth, and payments.</p>
        <div className="tech-stack-mini">
          <span>Python</span><span>Flask</span><span>SQL</span>
        </div>
      </div>

      {/* TILE 2: The Technical Proof (Spans 1 column) */}
      <div className="bento-tile secondary-tile">
        <div className="tile-icon"><Server size={30} /></div>
        <h3>REST API</h3>
        <p>Secure API with JWT Auth & Validation.</p>
      </div>

      {/* TILE 3: The "Learning Log" (Spans 1 column) */}
      <div className="bento-tile info-tile">
        <h3>Current Focus</h3>
        <div className="learning-item">
          <Database size={16} />
          <span>Mastering SQL Joins</span>
        </div>
        <div className="learning-item">
          <Code size={16} />
          <span>React Hooks</span>
        </div>
      </div>

      {/* TILE 4: GitHub Stats / Social Proof */}
      <div className="bento-tile social-tile">
        <Github size={40} />
        <h3>50+ Commits</h3>
        <p>in the last 30 days</p>
      </div>

    </div>
  );
};

export default BentoGrid;