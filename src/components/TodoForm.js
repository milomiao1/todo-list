import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const TodoForm = ({ onFormClose }) => {

  useEffect(() => {
    const now = new Date();
    setStartTime(formatDateForInput(now));

    now.setMinutes(now.getMinutes() + 20);
    setEndTime(formatDateForInput(now));
  }, []);

  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTodo({
      id: Date.now(),
      title,
      detail,
      startTime,
      endTime,
      completed: false
    }));
    setTitle('');
    setDetail('');
    setStartTime('');
    setEndTime('');
    onFormClose()
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <div className="time-inputs">
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;