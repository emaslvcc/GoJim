import React, { useState } from "react";
import "./Calendar.css";

interface Event {
  id: number;
  date: string;
  time: string;
  name: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const handleDayClick = (day: number) => {
    setSelectedDay(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const handleAddEvent = () => {
    setShowEventModal(true);
  };

  const handleSaveEvent = (newEvent: Omit<Event, 'id'>) => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setShowEventModal(false);
  };

  const eventsForSelectedDay = events.filter(event => {
    if (!selectedDay) return false;
    const eventDate = new Date(event.date);
    return (
      eventDate.getDate() === selectedDay.getDate() &&
      eventDate.getMonth() === selectedDay.getMonth() &&
      eventDate.getFullYear() === selectedDay.getFullYear()
    );
  });

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      days.push(
        <div
          key={i}
          className={`calendar-day ${selectedDay && selectedDay.getTime() === dayDate.getTime() ? 'selected' : ''}`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const formatDate = (date: Date) => {
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDay(new Date());
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-title">
          <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        </div>
        <div className="calendar-navigation">
          <button className="today-button" onClick={goToToday}>Today</button>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>Previous</button>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>Next</button>
        </div>
      </div>
      <div className="calendar">
        {renderCalendarDays()}
      </div>

      <div className="event-section">
        <h3>Today | {selectedDay ? formatDate(selectedDay) : "Select a date"}</h3>
        <button className="event-button" onClick={handleAddEvent}>+ Event</button>
        <div className="event-list-container">
          <div className="event-list">
            {eventsForSelectedDay.map(event => (
              <div key={event.id} className="event">{event.time} - {event.name}</div>
            ))}
          </div>
        </div>
      </div>

      {showEventModal && (
        <EventModal 
          onClose={() => setShowEventModal(false)} 
          onSave={handleSaveEvent}
          selectedDate={selectedDay ? selectedDay.toISOString().split('T')[0] : ''}
        />
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
