import React from 'react';
import "./StatusBar.css";

const StatusBar: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="status-bar">
    </div>
  );
};

export default StatusBar;