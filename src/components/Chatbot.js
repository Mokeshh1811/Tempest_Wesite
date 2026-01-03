import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Tempest Chatbot</h3>
            <button onClick={toggleChat} className="close-btn">×</button>
          </div>
          <div className="chatbot-body">
            <p>Hello! How can I help you today?</p>
            {/* Add more chatbot functionality here */}
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
      <button onClick={toggleChat} className="chatbot-toggle">
        🤖
      </button>
    </div>
  );
};

export default Chatbot;