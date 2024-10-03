// Workout.tsx
import React from "react";
import "./Workout.css";
import ChestWorkoutSymbol from "./Images/ChestWorkoutSymbol1.png"; // Import the image
import LegWorkoutSymbol from "./Images/LegWorkoutSymbol.png";
import { ReactComponent as StepsIcon } from "./symbols/steps.svg";
import { ReactComponent as FireIcon } from "./symbols/fire.svg";

const Workout = () => {
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
        <div className="workout-card">
          <div className="workout-header">
            <img src={ChestWorkoutSymbol} alt="Chest Workout Symbol" className="workout-symbol" />
            <h3>CHEST WORKOUT</h3>
          </div>
          <div className="buttons">

            <button className="start-btn">START</button>
          </div>
        </div>
        <div className="workout-card">
          <div className="workout-header">
            <img src={LegWorkoutSymbol} alt="Leg Workout Symbol" className="workout-symbol" />
            <h3>LEG WORKOUT</h3>
          </div>
          <div className="buttons">
            
            <button className="start-btn">START</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
