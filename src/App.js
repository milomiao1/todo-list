import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import HeaderBar from './components/HeaderBar';

import './App.css';
import './styles/TodoList.css';
function App() {
  const [showForm, setShowForm] = useState(false);

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleButtonClick = (buttonName) => {
    setShowForm(!showForm)
  };

  const headerButtons = () => {
      if (showForm) {
        return [{ label: 'Close', onClick: () => handleButtonClick('Button 2') },]
      } else {
        return [{ label: 'Add New', onClick: () => handleButtonClick('Button 1') },]
      }
  }
  
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderBar title="Todo List" buttons={headerButtons()} />
        {showForm && <TodoForm onFormClose={handleFormClose} />}
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;