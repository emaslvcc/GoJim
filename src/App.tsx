import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Calendar from './Calendar';
import People from './People';
import Profile from './Profile';
import Workout from './Workout';
import SeeWorkouts from './SeeWorkouts';

import { ReactComponent as CalendarIcon } from './symbols/calendar.svg';
import { ReactComponent as WorkoutIcon } from './symbols/exercise.svg';
import { ReactComponent as FriendsIcon } from './symbols/group.svg';
import { ReactComponent as ProfileIcon } from './symbols/profile.svg';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('calendar');
  const navigate = useNavigate();

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
    <>
      <div className="content">
        {renderContent()}
      </div>

      <div className="bottom-nav">
        <button onClick={() => { setActiveTab('calendar'); navigate('/'); }} className={activeTab === 'calendar' ? 'active' : ''}>
          <CalendarIcon />
        </button>
        <button onClick={() => { setActiveTab('workout'); navigate('/'); }} className={activeTab === 'workout' ? 'active' : ''}>
          <WorkoutIcon />
        </button>
        <button onClick={() => { setActiveTab('friends'); navigate('/'); }} className={activeTab === 'friends' ? 'active' : ''}>
          <FriendsIcon />
        </button>
        <button onClick={() => { setActiveTab('profile'); navigate('/'); }} className={activeTab === 'profile' ? 'active' : ''}>
          <ProfileIcon />
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div id="root">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/see-workouts" element={<SeeWorkouts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
