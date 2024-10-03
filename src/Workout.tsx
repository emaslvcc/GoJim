// Workout.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Workout.css";
import ChestWorkoutSymbol from "./Images/ChestWorkoutSymbol1.png"; // Import the image
import LegWorkoutSymbol from "./Images/LegWorkoutSymbol.png";
import { ReactComponent as StepsIcon } from "./symbols/steps.svg";
import { ReactComponent as FireIcon } from "./symbols/fire.svg";
import AddWorkout from "./AddWorkout";

const Workout = () => {
  const [showAddWorkout, setShowAddWorkout] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setShowAddWorkout(true);
  };

  const handleCloseAddWorkout = () => {
    setShowAddWorkout(false);
  };

  const handleSaveWorkout = (workoutData: any) => {
    console.log("Saved workout:", workoutData);
    // Here you would typically save the workout data to your state or send it to a server
    // For now, let's store it in localStorage
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    workouts.push(workoutData);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  };

  const handleSeeWorkouts = () => {
    navigate('/see-workouts');
  };

  return (
    <div className="workout-section">
      <header className="header">
        <h1>GoJim</h1>
      </header>
      <div className="stats-container">
        <div className="stats-module steps">
          <StepsIcon className="stats-icon" />
          <h2>6243</h2>
          <p>STEPS</p>
        </div>
        <div className="stats-module calories">
          <FireIcon className="stats-icon" />
          <h2>2341</h2>
          <p>CALORIES</p>
        </div>
      </div>
      <div className="workout-plans-module">
        <h2>JIM'S WORKOUT PLANS</h2>
        <button className="see-workouts-btn" onClick={handleSeeWorkouts}>See Workouts</button>
        <div className="workout-card">
          <div className="workout-header">
            <img src={ChestWorkoutSymbol} alt="Chest Workout Symbol" className="workout-symbol" />
            <h3>CHEST WORKOUT</h3>
          </div>
          <div className="buttons">
            <button className="start-btn" onClick={handleStartClick}>START</button>
          </div>
        </div>
        <div className="workout-card">
          <div className="workout-header">
            <img src={LegWorkoutSymbol} alt="Leg Workout Symbol" className="workout-symbol" />
            <h3>LEG WORKOUT</h3>
          </div>
          <div className="buttons">
            <button className="start-btn" onClick={handleStartClick}>START</button>
          </div>
        </div>
      </div>
      {showAddWorkout && (
        <AddWorkout onClose={handleCloseAddWorkout} onSave={handleSaveWorkout} />
      )}
    </div>
  );
};

export default Workout;
