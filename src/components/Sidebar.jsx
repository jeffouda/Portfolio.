import React from 'react';
import { Home, FolderGit2, User, Mail, Github, Linkedin } from 'lucide-react';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <div className="avatar">JD</div> {/* JD = Junior Dev.*/}
        <h3>Junior Dev</h3>
        <p>Full Stack Engineer</p>
      </div>

      {/*Navigation Links*/}
      <nav className="nav-links">
        <a href="#" className="nav-item active">
          <Home size={30} />
          <span>Home</span>
        </a>
        <a href="#" className="nav-item">
          <FolderGit2 size={30} />
          <span>Projects</span>
        </a>
        <a href="#" className="nav-item">
          <User size={30} />
          <span>About Me</span>
        </a>
      </nav>

      {/*Footer / Socials*/}
      <div className="socials">
        <a href="#" className="social-icon"><Github size={35} /></a>
        <a href="#" className="social-icon"><Linkedin size={35} /></a>
        <a href="mailto:youremail@gmail.com" className="social-icon"><Mail size={35} /></a>
      </div>
    </div>
  );
};

export default Sidebar;