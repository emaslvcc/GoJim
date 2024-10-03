// Workout.tsx
import React from "react";

const Workout = () => {
  return (
    <div className="workout-section">
      <div className="stats">
        <div className="steps">
          <h2>6243</h2>
          <p>Steps</p>
        </div>
        <div className="calories">
          <h2>2341</h2>
          <p>Calories</p>
        </div>
      </div>

      <div className="workouts">
        <div className="workout-card">
          <h3>Chest Workout</h3>
          <button>See Details</button>
          <button>Start</button>
        </div>
        <div className="workout-card">
          <h3>Leg Workout</h3>
          <button>See Details</button>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
