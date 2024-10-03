import React, { useState } from 'react';
import './App.css';

import Calendar from './Calendar';
import People from './People';
import Profile from './Profile';
import Workout from './Workout';
import StatusBar from './StatusBar';

import { ReactComponent as CalendarIcon } from './symbols/calendar_inactive.svg';
import { ReactComponent as WorkoutIcon } from './symbols/exercise_inactive.svg';
import { ReactComponent as FriendsIcon } from './symbols/groups_inactive.svg';
import { ReactComponent as ProfileIcon } from './symbols/profile_inactive.svg';

const App = () => {
  const [activeTab, setActiveTab] = useState('calendar');

  const renderContent = () => {
    switch (activeTab) {
      case 'calendar':
        return (
          <>
            <div className="calendar-header">
              {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
            </div>
            <Calendar />
          </>
        );
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
      <StatusBar /> {/* New StatusBar component */}
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
