import React from 'react';
import "./StatusBar.css";

const StatusBar: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="status-bar">
      <span>{currentTime}</span>
      <span>Carrier</span>
      <span>
        93% <div className="battery"></div>
      </span>
    </div>
  );
};

export default StatusBar;