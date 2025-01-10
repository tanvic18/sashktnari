import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const modules = [
  { name: 'Career Guidance', icon: '👩‍💼', description: 'Explore career opportunities', color: '#FF6B6B' },
  { name: 'Mentorship', icon: '🤝', description: 'Connect with mentors', color: '#4ECDC4' },
  { name: 'Skill Development', icon: '📚', description: 'Learn new skills', color: '#45B7D1' },
  { name: 'Entrepreneurship', icon: '💼', description: 'Start your own business', color: '#F7B731' },
  { name: 'Financial Literacy', icon: '💰', description: 'Manage your finances', color: '#6C5CE7' },
  { name: 'Health & Wellness', icon: '🧘‍♀️', description: 'Take care of yourself', color: '#26de81' },
];
<div className="module-grid">
  {modules.map((module, index) => (
    <div key={index} className="module-card" style={{ '--card-color': module.color }}>
      <div className="module-icon">{module.icon}</div>
      <h3>{module.name}</h3>
      <p>{module.description}</p>
      
    </div>
  ))}
</div>


function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-background"></div>
      <header className="dashboard-header">
        <h1 className="logo">The Sashakt Nari</h1>
        <nav>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
          <Link to="/login" className="nav-link">Logout</Link>
        </nav>
      </header>
      <main className="dashboard-main">
        <h2 className="welcome-message">Welcome, Empowered Woman!</h2>
        <p className="sub-message">Your journey to success begins here. Explore our modules and unleash your potential.</p>
        <div className="module-grid">
          {modules.map((module, index) => (
            <div key={index} className="module-card" style={{'--card-color': module.color}}>
              <div className="module-icon">{module.icon}</div>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <Link to={module.name === 'Career Guidance' ? '/user-profile' : `/${module.name.toLowerCase().replace(' ', '-')}`}
                className="explore-btn"
              >
                Explore</Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2025 The Sashakt Nari. Empowering women to reach new heights.</p>
      </footer>
    </div>
  );
  
}

export default DashboardPage;

