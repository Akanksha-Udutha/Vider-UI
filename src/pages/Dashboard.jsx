import React, { useState } from 'react';
import { MessageSquare, LayoutTemplate, Radio } from 'lucide-react';
import ChatView from './ChatView';
import TemplatesView from './TemplatesView';
import BroadcastView from './BroadcastView';
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <nav className="side-nav">
        <div className="nav-group">
          <div className={`nav-item ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>
            <MessageSquare size={18} /> <span>Chat</span>
          </div>
          <div className={`nav-item ${activeTab === 'templates' ? 'active' : ''}`} onClick={() => setActiveTab('templates')}>
            <LayoutTemplate size={18} /> <span>Templates</span>
          </div>
          <div className={`nav-item ${activeTab === 'broadcast' ? 'active' : ''}`} onClick={() => setActiveTab('broadcast')}>
            <Radio size={18} /> <span>Broadcast</span>
          </div>
        </div>
      </nav>

      {/* Conditional Rendering of Views */}
      {activeTab === 'chat' && <ChatView />}
      {activeTab === 'templates' && <TemplatesView />}
      {activeTab === 'broadcast' && <BroadcastView />}
    </div>
  );
};

export default Dashboard;