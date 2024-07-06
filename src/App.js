import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { store } from './app/store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import HeaderBar from './components/HeaderBar';
import TransitionEffects from './components/TransitionEffects';
import { useNavigate } from 'react-router-dom';

import './App.css';
import './styles/TodoList.css';
import './styles/TransitionEffects.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate('/add');
  };

  const headerButtons = [
    { label: 'Add New', onClick: handleButtonClick },
  ];

  return (
    <div className="App">
      <HeaderBar title="Todo List" buttons={headerButtons} />
      <TransitionEffects location={location} effect="fade">
        <Routes location={location}>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<TodoForm />} />
        </Routes>
      </TransitionEffects>
    </div>
  );
}

export default App;