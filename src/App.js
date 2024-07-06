import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import HeaderBar from './components/HeaderBar';
import { useNavigate } from 'react-router-dom';

import './App.css';
import './styles/TodoList.css';
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

  const handleButtonClick = () => {
    navigate('/add');
  };

  const headerButtons = [
    { label: 'Add New', onClick: handleButtonClick },
  ];

  return (
    <div className="App">
      <HeaderBar title="Todo List" buttons={headerButtons} />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<TodoForm />} />
      </Routes>
    </div>
  );
}


export default App;