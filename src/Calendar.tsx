// Calendar.tsx
import React, { useState } from "react";
import "./Calendar.css"; // Importing the corresponding CSS file

interface Event {
  id: number;
  date: string;
  time: string;
  name: string;
}

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  const daysInMonth = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  const handleAddEvent = () => {
    setShowEventModal(true);
  };

  const handleAddWorkout = () => {
    setShowWorkoutModal(true);
  };

  const handleSaveEvent = (newEvent: Omit<Event, 'id'>) => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setShowEventModal(false);
  };

  const eventsForSelectedDay = events.filter(
    event => event.date === `2023-09-${selectedDay?.toString().padStart(2, '0')}`
  );

  return (
    <div className="calendar-container">
      <div className="calendar">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`calendar-day ${selectedDay === day ? "selected" : ""}`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="event-section">
        <h3>Today | {selectedDay ? `September ${selectedDay}` : "Select a date"}</h3>
        {eventsForSelectedDay.map(event => (
          <div key={event.id} className="event">{event.time} - {event.name}</div>
        ))}
        <button className="event-button" onClick={handleAddEvent}>+ Event</button>
        <button className="event-button" onClick={handleAddWorkout}>+ Workout</button>
      </div>

      {showEventModal && (
        <EventModal 
          onClose={() => setShowEventModal(false)} 
          onSave={handleSaveEvent}
          selectedDate={selectedDay ? `2023-09-${selectedDay.toString().padStart(2, '0')}` : ''}
        />
      )}
      {showWorkoutModal && (
        <WorkoutModal onClose={() => setShowWorkoutModal(false)} />
      )}
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
}

interface EventModalProps {
  onClose: () => void;
  onSave: (event: Omit<Event, 'id'>) => void;
  selectedDate: string;
}

const EventModal: React.FC<EventModalProps> = ({ onClose, onSave, selectedDate }) => {
  const [date, setDate] = useState(selectedDate);
  const [time, setTime] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ date, time, name });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Event Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save Event</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

const WorkoutModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Workout</h2>
        {/* Add form fields for workout details */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Calendar;
