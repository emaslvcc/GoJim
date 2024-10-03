import React, { useState } from 'react';
import './App.css';

import Calendar from './Calendar';
import People from './People';
import Profile from './Profile';
import Workout from './Workout';

import { ReactComponent as CalendarIcon } from './symbols/calendar.svg';
import { ReactComponent as WorkoutIcon } from './symbols/exercise.svg';
import { ReactComponent as FriendsIcon } from './symbols/group.svg';
import { ReactComponent as ProfileIcon } from './symbols/profile.svg';

const App = () => {
  const [activeTab, setActiveTab] = useState('calendar');

  const renderContent = () => {
    switch (activeTab) {
      case 'calendar':
        return <Calendar/>;
      case 'workout':
        return <Workout/>;
      case 'friends':
        return <People/>;
      case 'profile':
        return <Profile/>;
      default:
        return null;
    }
  };

  return (
    <div id="root">
      <div className="content">
        {renderContent()}
      </div>

      <div className="bottom-nav">
        <button onClick={() => setActiveTab('calendar')} className={activeTab === 'calendar' ? 'active' : ''}>
          <CalendarIcon />
        </button>
        <button onClick={() => setActiveTab('workout')} className={activeTab === 'workout' ? 'active' : ''}>
          <WorkoutIcon />
        </button>
        <button onClick={() => setActiveTab('friends')} className={activeTab === 'friends' ? 'active' : ''}>
          <FriendsIcon />
        </button>
        <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>
          <ProfileIcon />
        </button>
      </div>
    </div>
  );
};

export default App;
