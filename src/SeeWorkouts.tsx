import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeeWorkouts.css';

interface WorkoutData {
  exercise: string;
  sets: number;
  repetitions: number;
  weight: number;
}

const SeeWorkouts: React.FC = () => {
  const [workouts, setWorkouts] = useState<WorkoutData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    setWorkouts(storedWorkouts);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="see-workouts-container">
      <h2>Your Workouts</h2>
      <button className="back-btn" onClick={handleBack}>Back</button>
      {workouts.length === 0 ? (
        <p>No workouts added yet.</p>
      ) : (
        <ul className="workout-list">
          {workouts.map((workout, index) => (
            <li key={index} className="workout-item">
              <h3>{workout.exercise}</h3>
              <p>Sets: {workout.sets}</p>
              <p>Repetitions: {workout.repetitions}</p>
              <p>Weight: {workout.weight} kg</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeeWorkouts;