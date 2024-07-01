import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todoSlice';
import ConfirmDialog from './ConfirmDialog';
import '../styles/TodoList.css';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, todoId: null });

  const handleDelete = (id) => {
    setConfirmDialog({ isOpen: true, todoId: id });
  };

  const confirmDelete = () => {
    if (confirmDialog.todoId) {
      const todoElement = document.getElementById(`todo-${confirmDialog.todoId}`);
      todoElement.classList.add('fade-out');
      
      setTimeout(() => {
        dispatch(removeTodo(confirmDialog.todoId));
        setConfirmDialog({ isOpen: false, todoId: null });
      }, 300); // 等待动画完成
    }
  };

  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} id={`todo-${todo.id}`}>
            <div className="todo-content">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <span className="todo-title" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </span>
              <p className="todo-detail">{todo.detail}</p>
              <p className="todo-time">Start: {todo.startTime}</p>
              <p className="todo-time">End: {todo.endTime}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        onClose={() => setConfirmDialog({ isOpen: false, todoId: null })}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this todo?"
      />
    </>
  );
};

export default TodoList;