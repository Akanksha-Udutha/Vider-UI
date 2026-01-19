import React from 'react';
import { Search, Phone, Video, MoreHorizontal, Smile, Plus, Mic } from 'lucide-react';

const ChatView = () => {
  const clients = [
    { name: "Cody Fisher", time: "05:14 pm", msg: "Haha oh man", active: false },
    { name: "Jane Cooper", time: "07:38 am", msg: "Haha that's terrifying 😂", active: true },
    { name: "Floyd Miles", time: "11:49 pm", msg: "perfect!", active: false, count: "5+" },
    { name: "Marvin McKinney", time: "07:40 am", msg: "omg, this is amazing...", active: false, count: "1" },
    { name: "Courtney Henry", time: "08:20 pm", msg: "aww", active: false, count: "1" },
  ];

  return (
    <>
      <aside className="client-sidebar">
        <div className="sidebar-header">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search or start a new chat" />
          </div>
          <h3 className="section-title">ALL CLIENTS</h3>
        </div>
        <div className="client-list">
          {clients.map((client, i) => (
            <div key={i} className={`client-card ${client.active ? 'active' : ''}`}>
              <div className="client-avatar">{client.name[0]}</div>
              <div className="client-meta">
                <div className="client-top">
                  <span className="client-name">{client.name}</span>
                  <span className="client-time">{client.time}</span>
                </div>
                <div className="client-bottom">
                  <p className="client-msg">{client.msg}</p>
                  {client.count && <span className="unread-badge">{client.count}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      <main className="chat-window">
        <header className="chat-header">
          <div className="current-user-info">
            <div className="header-avatar">JC</div>
            <div>
              <h4>Jane Cooper</h4>
              <span className="status-dot">Online</span>
            </div>
          </div>
          <div className="header-actions">
            <Phone size={20} /> <Video size={20} /> <Search size={20} /> <MoreHorizontal size={20} />
          </div>
        </header>
        <div className="chat-messages">
          <div className="encryption-notice">🔒 Messages are end-to-end encrypted.</div>
          <div className="message received">Hi there, How are you?</div>
          <div className="message sent">I'm great! How can I help?</div>
        </div>
        <footer className="chat-footer">
          <div className="input-container">
            <Smile size={22} className="footer-icon" /><Plus size={22} className="footer-icon" />
            <input type="text" placeholder="Say Something..." />
            <Mic size={22} className="footer-icon mic-icon" />
          </div>
        </footer>
      </main>
    </>
  );
};

export default ChatView;