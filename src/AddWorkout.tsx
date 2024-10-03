import React, { useState } from 'react';
import './AddWorkout.css';

interface AddWorkoutProps {
  onClose: () => void;
  onSave: (workout: WorkoutData) => void;
}

interface WorkoutData {
  exercise: string;
  sets: number | '';
  repetitions: number | '';
  weight: number | '';
}

const AddWorkout: React.FC<AddWorkoutProps> = ({ onClose, onSave }) => {
  const [workout, setWorkout] = useState<WorkoutData>({
    exercise: '',
    sets: '',
    repetitions: '',
    weight: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWorkout(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...workout,
      sets: Number(workout.sets),
      repetitions: Number(workout.repetitions),
      weight: Number(workout.weight),
    });
    onClose();
  };

  return (
    <div className="add-workout-overlay">
      <div className="add-workout-modal">
        <h2>Add Workout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exercise">Exercise:</label>
            <input
              type="text"
              id="exercise"
              name="exercise"
              value={workout.exercise}
              onChange={handleChange}
              placeholder="Enter exercise name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sets">Sets:</label>
            <input
              type="number"
              id="sets"
              name="sets"
              value={workout.sets}
              onChange={handleChange}
              placeholder="Enter number of sets"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="repetitions">Repetitions:</label>
            <input
              type="number"
              id="repetitions"
              name="repetitions"
              value={workout.repetitions}
              onChange={handleChange}
              placeholder="Enter number of repetitions"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={workout.weight}
              onChange={handleChange}
              placeholder="Enter weight in kg"
              required
            />
          </div>
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkout;