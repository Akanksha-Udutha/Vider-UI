import React from 'react';
import logo from "../assets/vider.png";

const TemplatesView = () => {
  const templates = [
    { title: "Welcome Email", desc: "Send a warm welcome message to new subscribers with a personalized greeting and introduction to your services." },
    { title: "Team Update", desc: "Keep your team informed with weekly updates on project progress, milestones, and important announcements." },
    { title: "Welcome Email", desc: "Send a warm welcome message to new subscribers with a personalized greeting and introduction to your services." },
    { title: "Welcome Email", desc: "Send a warm welcome message to new subscribers with a personalized greeting and introduction to your services." },
    { title: "Welcome Email", desc: "Send a warm welcome message to new subscribers with a personalized greeting and introduction to your services." },
    { title: "Team Update", desc: "Keep your team informed with weekly updates on project progress, milestones, and important announcements." },
    { title: "Team Update", desc: "Keep your team informed with weekly updates on project progress, milestones, and important announcements." },
    { title: "Welcome Email", desc: "Send a warm welcome message to new subscribers with a personalized greeting and introduction to your services." },
  ];

  const handleTemplateClick = () => {
   
  };

  return (
    <main className="templates-view">
      <div className="view-header">
        <h1>Templates</h1>
        <p>Choose from our pre-built templates</p>
      </div>
      <div className="templates-grid">
        {templates.map((temp, i) => (
          <div 
            key={i} 
            className="template-card clickable" 
            onClick={() => handleTemplateClick(temp.title)}
          >
            <div className="template-card-content">
              <h3>{temp.title}</h3>
              <p>{temp.desc}</p>
            </div>
            <div className="template-card-footer">
              <img src={logo} alt="Vider" className="template-vider-logo" />
              <span className="logo-text">VIDER <span className="connect-text">CONNECT</span></span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TemplatesView;