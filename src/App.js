import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import './styles/TodoList.css';
function App() {
  const [showForm, setShowForm] = useState(false);

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <button className="add-todo-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Close' : 'Add New Todo'}
        </button>
        {showForm && <TodoForm onFormClose={handleFormClose} />}
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;